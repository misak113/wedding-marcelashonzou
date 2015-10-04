
gulp = require 'gulp'
require './js-ts-watch'
require './css-less-watch'

gulp.task 'watch', [
  'js-ts-watch'
  'css-less-watch'
]
