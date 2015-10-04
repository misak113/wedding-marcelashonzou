
gulp = require 'gulp'
paths = require './paths'
watchLess = require 'gulp-watch-less'
require './css-less'

gulp.task 'css-less-watch', ['css-less-build'], ->
  return watchLess [paths.less.src], -> gulp.run 'css-less-build'
