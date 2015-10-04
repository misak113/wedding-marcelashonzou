
gulp = require 'gulp'
require './js-watch'
require './css-less-watch'

gulp.task 'watch', [
  'js-watch'
  'css-less-watch'
]
