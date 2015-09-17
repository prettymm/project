FE Lab
=================
This repositiory is to be used as starter kit for FE projects, so coding standards, workflow, and codebase is as normalized as possible.

Global Dev Requirements
-------------
  * npm (http://nodejs.org/)
  * gulp
  * styledown
  * uglifyjs
  * stylint

Cloning
-------------
- If you are about to start a new project, then clone this one as starter. Afterwards, change the origin url in git to point to the url of the new project repository.

```
git clone https://$username@bitbucket.org/loweproferotech/fe-lab.git
mv fe-lab $new-project-name # rename the directory
cd $new-project-name
git remote set-url origin https://$username@bitbucket.org/loweproferotech/$name.git
```

- Create a new dev branch and start your work from there. Be sure to follow the README.md guides found in the various source directories.

Install
-------------
First install all global requirements if not already on system

```
npm install -g gulp styledown uglifyjs stylint
cd $new-project-name
npm install
```

Run
-------------

```
cd $new-project-name

gulp # defaults with port 3000
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

HTTPS
-------------
SSL is available. Start the project on PORT 80 with:
```
npm start # enter your password and browse https://localhost
```

Styleguide
-------------
Stylus files need to be documented so that the style guide can be automatically generated. We use a very simple generator which does all the heavy lifting called [Styledown](https://github.com/styledown/styledown). 
```
npm run style # generates updated style guide
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
- Utilize the DRY principle in your code; do not repeat the same code in multiple areas; use stylus & jade mixins, JS functions etc to key code dry
- CSS class/id names with dashed format: eg. .c-carousel, .icon-logo, #unique-element
- If the project must be ADA compliant, make sure that you set up landmarks from the very start
- Do NOT use browserify and shim in the project. See vendor/README.md for details.
- !!IMPORTANT!! Markup should be built in modules and CSS classes should reflect the start of a module. Consider the following markup, notice that every area where a new module is, it is very distinct. Modules are clearly prefixed with `.c-`. 
- Stylus files need to be documented so that the style guide can be automatically generated.
```
<body>
  <div class="c-header">
    <div class="c-hero">...</div>
    <div class="c-nav" role="navigation" aria-label="Main navigation">
      <ul class="c-horizontal-list"></ul>
    </div>
  <div>
  <div class="c-main" role="main">
  <section class="c-article">
    <section class="c-breadcrumbs">
      <span class="l-inline-block ic-bread">
      <span class="l-inline-block meta">Home > Rules</span>
    </section>
    <section class="c-article-main">...</section>
    <section class="c-article-footer">...</section>
  </section>
  </div>
  <div class="c-footer">
    <section class="c-footer-nav" role="navigation" aria-label="Footer Navigation"></section>
    <section class="c-copyright" role="contentinfo">....</section>
  </div>
</body>
```

Linters
------------
- Stylint: To enforce the best practices in CSS and stylus, stylint is used. See the rules in bin/config.stylintrc file. Find out what these options mean at [stylint github](https://github.com/rossPatton/stylint): 

Docs
------------
For details visit [FE Lab](https://loweproferotech.atlassian.net/wiki/display/IL/FE+Lab).
