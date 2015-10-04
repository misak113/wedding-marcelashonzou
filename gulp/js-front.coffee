
gulp = require 'gulp'
browserify = require 'gulp-browserify'
rename = require 'gulp-rename'
paths = require './paths'
require './js-ts'

gulp.task 'js-front', ['js-ts'], ->
  return gulp.src paths.front.mainFile
    .pipe browserify({
      insertGlobals: false
      debug: true
    })
    .pipe(rename('front-bundle.js'))
    .pipe gulp.dest(paths.dist)
