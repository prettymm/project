/**
  @name FE Starter Kit
  @company Lowe Profero Beijing
  @author Lisa-Ann Bruney <lisa-ann.bruney@loweprofero.com>

  If this file is edited to add additional tools, 
  please make sure that the new tools do not 
  slow down the script performance for server loads, and tasks (jade, stylus, coffee etc) 
  time execution.

  Additional tools should be added as an option, as seen below beginning at ln 153
  "process.argv...". Please ask for help when unsure. See README.md for additional
  details.
**/
var express = require('express'),
app = express(),
server = null,
bs = null,
logger = require('morgan'),
path = require('path'),
gulp = require('gulp'),
coffee = require('gulp-coffee'),
concat = require('gulp-concat'),
uglify = require('gulp-uglify'),
stylus = require('gulp-stylus'),
jshint = require('gulp-jshint-classic'),
stylish = require('jshint-stylish'),
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
defaultTasks = ['server', 'jade', 'locale', 'watch-vendor'],
spawn = require('child_process').spawn,
run = require('run-sequence'),
kouto = require('kouto-swiss'),
nib = require('nib');
featureEnabled.lr = '';
featureEnabled.style = 'stylint';
featureEnabled.noserver = featureEnabled.maps = false;
featureEnabled.simpleWatch = true;

var merge = function(object1, object2) {
  for (var attrname in object2) object1[attrname] = object2[attrname];
  return object1;
};

var config = {
  styleguide: 'styleguide.html',
  language: 'en',
  build: './build/',
  jsFile: 'app.min.js',
  src: './src/',
  jsLang: 'coffee',
  host: 'http://127.0.0.1:5000',
  deployHost: '//host.proferochina.com',
  port: 5000,
  name: 'FELab'
};

var generateStyleguide = function() {
  changedFile = config.styleguide;
  exec('npm run style', generalCallback);
};

var toggle = function(feature, featureEnabled, args) {
  if (featureEnabled) {
    if (args && args.name)
      gutil.log(gutil.colors.blue('..with ' + args.name +' enabled.'));
    return args && args.params ? feature(args.params) : feature();
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
  vendorJs: config.src + 'vendor/js/',
  coffee: config.src + 'coffee/',
  srcStylus: config.src + 'stylus/app*.styl',
  srcJs: config.src + 'js/_*.js',
  srcCoffee: config.src + 'coffee/**/_*.coffee',
  srcJade: config.src + 'jade/*.jade',
  srcImg: config.src + 'img/*',
  styles: config.src + 'stylus/',
  locale: config.src + 'locale/'+ config.language +'.json',
  jade: config.src + 'jade/',
};

var printChanged = function(changedFile) {
  if (changedFile) {
    gutil.log(gutil.colors.blue(changedFile));
  }
};

var generalCallback = function(error, stdout, stderr) {
  printChanged(changedFile);

  if (error) {
    gutil.log(gutil.colors.red('exec error: ' + error));
  }
  if (changedFile != config.styleguide) {
    generateStyleguide(); 
  }

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

var stream = function(ls, task) {
  var error = false;

  ls.stdout.on('data', function (data) {
    gutil.log(''+data);
  });

  ls.stderr.on('data', function (data) {
    error = true;
    gutil.log(gutil.colors.red(''+data));
  });

  ls.on('close', function (code) {
    gutil.log(gutil.colors.yellow('Finished with code (1/error occurred, 0/no error): ' + code));
    if (!error && task) {
      ls = spawn('gulp', [task]);
      stream(ls);
    }
  });
};

process.argv.forEach(function (val, index, array) {
  var arg = '';
  switch(val) {
    case '-stylus': 
      featureEnabled.style = 'stylus';
    break;
    case '-js':
      config.jsLang = 'js';
    break;
    case '-lr':
      arg = val; 
      gutil.log('livereload/browser-sync...');
      featureEnabled.lr = 'lr';
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
    case '-deploy':
    case '-d':
      arg = val;
      locals.host = config.deployHost;
      featureEnabled.deploy = true;
    break;
    default:
      if (contains(val, 'port='))
        config.port = parseInt(val.split('=')[1]);
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
      use: [nib(), kouto()],
      import:['nib'],
      compress: true
    }))
    .on('error', gutil.log)
    .pipe(gulp.dest(paths.css));
});

gulp.task('stylus-success', function() {
  run('stylus');
  generateStyleguide();
});

gulp.task('stylint', function() {
  ls = spawn('npm', ['run', 'stylint']);
  stream(ls, 'stylus-success');
});

gulp.task('jade', function() {
  gulp.src(paths.srcJade)
    .pipe(jade({
      locals: locals,
      pretty: true
    }))
    .on('error', gutil.log)
    .pipe(gulp.dest(paths.build));
});

var reload = function() {
  setTimeout(function() {
    bs.reload(['*.css', '*.js', '*.html']);
  }, 2000);
};

var initServer = function(ops) {
  ops = ops || featureEnabled;
  if (ops.lr && !bs) {
    bs = require('browser-sync')({
      logPrefix: config.name,
      port: 8080
    });
    app.use(require('connect-browser-sync')(bs));
    bs.watch(config.build + '**').on('change', reload);
    bs.reload();
  }

  app.use(logger('dev'));
  app.use(express.static(__dirname + '/build/'));
  app.set('views', path.join(__dirname, paths.jade));
  app.set('view engine', 'jade');
  var render = function(req, res) {
    var page = getPage(req),
    data = merge({page: page}, locals);
    res.render(page, data);
  };
  app.get('/*', function (req, res) {
    render(req, res);
  });
  app.post('/*', function (req, res) {
    render(req, res);
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
    config.port = process.env.PORT || config.port;

    var portOps = 'PORT=' + config.port, ls = null,
    spawnOps = [portOps, 'nodemon', './bin/www', '--ignore', 'build/', '--ignore', 'node_modules', featureEnabled.lr];

    if (config.port == 80) {
      ls = spawn('sudo', spawnOps);
    } else {
      process.env.PORT = config.port;
      ls = spawn('nodemon', spawnOps.slice(2));
    }
    stream(ls);
  }
});

gulp.task('coffee', function() {
  return gulp.src(paths.srcCoffee) /* Use an array of files instead if need to concat in order. e.g gulp.src(['_file1.coffee', '_file2.coffee']) */
    .pipe(toggle(sourcemaps.init, featureEnabled.maps))
      .pipe(coffee({ bare: true }).on('error', gutil.log))
      .pipe(toggle(uglify, featureEnabled.deploy, {name: 'deploy - uglifyjs'}))
      .pipe(concat(config.jsFile))
    .pipe(toggle(sourcemaps.write, featureEnabled.maps, {params: '../maps', name: 'source maps'}))
    .pipe(gulp.dest(paths.buildJs));
});

gulp.task('js', function() {
  return gulp.src(paths.srcJs)
    .pipe(jshint({ 
      unused: true, 
      camelcase: true, 
      indent: 2, 
      globals: ['$']
    }))
    .pipe(jshint.reporter(stylish))
    .pipe(jshint.reporter('fail'))
    .on('error', gutil.log)
    .pipe(toggle(uglify, featureEnabled.deploy, {name: 'deploy - uglifyjs'}))
    .pipe(concat(config.jsFile))
    .pipe(gulp.dest(paths.buildJs));
});

gulp.task('vendor-js', function() {
  exec('cat '+ paths.vendorJs +'*.js | uglifyjs -m -c --overwrite > '+ paths.buildJs +'vendor.min.js', generalCallback);
});

gulp.task('watch-vendor', function() {
  watch(paths.vendorJs, function(file) {
    changedFile = file;
    run('vendor-js');
  });
});

gulp.task('watch-simple', function() {
  gutil.log(gutil.colors.yellow('Standard gulp.watch does not watch new and deleted files. Start gulp with -wall to watch all.'));
  gulp.watch(paths.jade + '**/*', ['jade']);
  gulp.watch(paths[config.jsLang] + '**/*', [config.jsLang]);
  gulp.watch(paths.styles + '**/*', [featureEnabled.style]);
});

gulp.task('watch-all', function() {
  watch(paths.jade, function(file) {
    printChanged(file);
    ls = spawn('gulp', ['jade']);
    stream(ls);
  });
  watch(paths.styles, function(file) {
    printChanged(file);
    ls = spawn('gulp', [featureEnabled.style]);
    stream(ls);
  });
  watch(paths[config.jsLang], function(file) {
    changedFile = file;
    ls = spawn('gulp', [config.jsLang]);
    stream(ls);
  });
});

gulp.task('locale', function() {
  watch(paths.locale, function(file) {
    printChanged(file);
    ls = spawn('gulp', ['jade']);
    stream(ls);
  });
});

gulp.task('default', defaultTasks);

app.init = initServer;
module.exports = app;