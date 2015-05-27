Projec Name
=================

Global Dev Requirements
-------------
  * npm (http://nodejs.org/)
  * gulp

Install
-------------
First install all global requirements if not already on system

```
npm install -g gulp
cd $project-directory
npm install
```

Run
-------------

```
cd $project-directory
gulp
```

Options
-------------
There are some options that can be enabled when running `gulp`:
- `-lr`   # to enable liveReload; you should have the plugin installed and connected on your browser.  
- `-img`  # enable `gulp-imagemin`; The source images will then be loaded from the directory `src\img`. So make sure you have created that directory if you enable this option.  
- `-maps` # enable sourcemaps  
- `-wall` # watch all altered files, including deleted and new; slower than standard `gulp.watch`
- `-port=#` # change the server port #; default is 3000

Examples
```
gulp -maps
gulp -lr -img
```

Git Standards
--------------
- Please use proper commit message being consistent with either the present or past tense. 
-- A proper commit message must have a noun and a verb. A commit like "update" is not good. Instead "Update _carousel.styl header"
-- Fixed issues should have issue # in commit message
- Do NOT merge anything to `master`
  
Coding Standards
--------------
- 2 spaces as a tab for JS, CSS, CoffeeScript, Stylus, Jade
- camelCase JS variable/function names
- CSS class/id names with dashed format: eg. .c-carousel, .icon-logo, #unique-element
