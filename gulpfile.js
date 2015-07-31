var express = require('express'),
app = express(),
server = null,
port = 3000,
logger = require('morgan'),
path = require('path'),
gulp = require('gulp'),
coffee = require('gulp-coffee'),
concat = require('gulp-concat'),
uglify = require('gulp-uglify'),
stylus = require('gulp-stylus'),
livereload = require('gulp-livereload'),
jade = require('gulp-jade'),
gutil = require('gulp-util'),
watch = require('node-watch'),
exec = require('child_process').exec,
changedFile = null,
featureEnabled = {},
inputArguments = [],
through = require('through2'),
imagemin = null,
sourcemaps = require('gulp-sourcemaps'),
defaultTasks = ['server', 'jade', 'locale'],
spawn = require('child_process').spawn,
nib = require('nib');
featureEnabled.noserver = featureEnabled.maps = false;
featureEnabled.simpleWatch = true;

var merge = function(object1, object2) {
  for (var attrname in object2) object1[attrname] = object2[attrname];
  return object1;
};

var config = {
  language: 'en',
  build: './build/',
  jsFile: 'app.min.js',
  src: './src/'
};

var toggle = function(feature, featureEnabled, args) {
  if (featureEnabled) {
    return args ? feature(args) : feature();
  } 
  return through.obj(function(file, enc, cb) {
    cb(null, file);
  });
};

var paths = {
  build: config.build,
  buildJs: config.build + 'assets/js/',
  img: config.build + 'assets/img',
  css: config.build + 'assets/css/',
  js: config.src + 'js/',
  coffee: config.src + 'coffee/',
  srcStylus: config.src + 'stylus/app*.styl',
  srcJs: config.src + 'js/_*.js',
  srcCoffee: config.src + 'coffee/_*.coffee',
  srcJade: config.src + 'jade/*.jade',
  srcImg: config.src + 'img/*',
  styles: config.src + 'stylus/',
  locale: config.src + 'locale/'+ config.language +'.json',
  jade: config.src + 'jade/',
};

var generalCallback = function(error, stdout, stderr) {
  if (changedFile)
    gutil.log(gutil.colors.blue(changedFile));
  if (error) {
    gutil.log(gutil.colors.red('exec error: ' + error));
  }
  livereload.changed(paths.buildJs + config.jsFile);
};

var locals = merge(config, require(paths.locale));

var getPage = function(req){
  if (req.params[0].indexOf('home/') != -1) {
    req.params[0] = 'index';
  }
  var page = req.params[0];
  return page.replace('.html', '');
};

var contains = function(haystack, needle) {
  return haystack.indexOf(needle) > -1;
};

process.argv.forEach(function (val, index, array) {
  var arg = '';
  switch(val) {
    case '-lr':
      arg = val; 
      gutil.log('livereload...');
      livereload.listen();
    break;
    case '-img':
      imagemin = require('gulp-imagemin')
      arg = val; 
      defaultTasks.push('images');
    break;
    case '-maps':
      arg = val; 
      featureEnabled.maps = true;
    break;
    case '-wall':
      arg = val; 
      defaultTasks.push('watch-all')
      featureEnabled.simpleWatch = false;
    break;
    case '-con':
      arg = val;
      featureEnabled.noserver = true;
    break;
    default:
      if (contains(val, 'port='))
        port = parseInt(val.split('=')[1]);
    break;
  }
  if (index == process.argv.length - 1 && featureEnabled.simpleWatch)
    defaultTasks.push('watch-simple')
  if (index >= 2)
    inputArguments.push(arg);
});

gulp.task('images', function() {
  return gulp.src(paths.srcImg)
    .pipe(imagemin({ optimizationLevel: 5 }))
    .pipe(gulp.dest(paths.img));
});

gulp.task('stylus', function() {
    gulp.src(paths.srcStylus)
    .pipe(stylus({
      use: [nib()],
      import:['nib'],
      compress: true
    }))
    .on('error', gutil.log)
    .pipe(gulp.dest(paths.css))
    .pipe(livereload());
});

gulp.task('jade', function() {
  gulp.src(paths.srcJade)
    .pipe(jade({
      locals: locals,
      pretty: true
    }))
    .on('error', gutil.log)
    .pipe(gulp.dest(paths.build))
    .pipe(livereload());
});

var initServer = function() {
  app.use(logger('dev'));
  app.use(express.static(__dirname + '/build/'));
  app.set('views', path.join(__dirname, paths.jade));
  app.set('view engine', 'jade');
  app.get('/*', function (req, res) {
    res.render(getPage(req), locals);
  });

  /* Handle errors */
  app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
  });
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('index', merge(config, {
        message: err.message,
        error: err
    }));
  });
};

gulp.task('server', function(cb) {
  initServer();
  if (!featureEnabled.noserver) {

    gutil.log(gutil.colors.yellow('Starting server...'));
    port = process.env.PORT || port;

    var portOps = 'PORT=' + port, ls = null,
    spawnOps = [portOps, 'nodemon', './bin/www', '-e', 'json', '--ignore', 'build/', '--ignore', 'node_modules'];

    if (port == 80) {
      ls = spawn('sudo', spawnOps);
    } else {
      process.env.PORT = port;
      ls = spawn('nodemon', spawnOps.slice(2));
    }
    
    ls.stdout.on('data', function (data) {
      gutil.log(''+data);
    });

    ls.stderr.on('data', function (data) {
      gutil.log(gutil.colors.red(''+data));
    });

    ls.on('close', function (code) {
      gutil.log('Process ended with code: ' + code);
    });
  }
});

gulp.task('coffee', function() {
  return gulp.src(paths.srcCoffee)
    .pipe(toggle(sourcemaps.init, featureEnabled.maps))
      .pipe(coffee({ bare: true }).on('error', gutil.log))
      .pipe(uglify())
      .pipe(concat(config.jsFile))
    .pipe(toggle(sourcemaps.write, featureEnabled.maps, '../maps'))
    .pipe(gulp.dest(paths.buildJs))
    .pipe(livereload());
});

gulp.task('watch-simple', function() {
  gutil.log(gutil.colors.yellow('Standard gulp.watch does not watch new and deleted files. Start gulp with -wall to watch all.'));
  gulp.watch(paths.jade+'**/*', ['jade', 'refresh']);
  gulp.watch(paths.coffee+'**/*', ['coffee', 'refresh']);
  gulp.watch(paths.styles+'**/*', ['stylus', 'refresh']);
});

gulp.task('watch-all', function() {
  var args = (inputArguments.toString()).replace(/,/g, ' ');
  watch(paths.jade, function(file) {
    changedFile = file;
    exec('gulp jade', generalCallback);
  });
  watch(paths.styles, function(file) {
    changedFile = file;
    exec('gulp stylus', generalCallback);
  });
  watch(paths.coffee, function(file) {
    changedFile = file;
    var arg = inputArguments.indexOf('-maps') ? '-maps' : '';
    exec('gulp coffee ' + arg, generalCallback);
  });
});

gulp.task('refresh', function() {
  livereload.changed(paths.buildJs + config.jsFile);
});

gulp.task('locale', function() {
  gulp.watch(paths.locale, ['jade']);
});

gulp.task('default', defaultTasks);

app.init = initServer;
module.exports = app;