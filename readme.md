Simple Site Boilerplate with Grunt v4
=====================================
This is a boilerplate starter site for use with grunt release candidate v4.  It is based on a common directory layout and typical development assumptions that I find myself re-using across projects.

The webroot is under /www.  All javascript is combined into two files: /www/js/lib.js contains jquery, jquery plugins and any other library files.  All other site-specific javascript files from js/src are combined into /www/js/script.js.  

Setup
-----
To install the required dependencies, move into the "build" directory and run:
> npm install

To watch for changes to base sass or javascript files, run the watch task:
> grunt watch

Tasks
-----
The default task lints and concatenates javascript files and compiles your sass files.

The "production" task does the same as the default task but also minifies the javascript (via uglify) and disables sass debugging.  Run before deployment to production:
> grunt production

