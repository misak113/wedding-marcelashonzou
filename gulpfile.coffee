
gulp = require 'gulp'
require './gulp/js-ts'
require './gulp/watch-js-ts'

gulp.task 'default', [
  'js-ts'
]

gulp.task 'watch', [
  'watch-js-ts'
]
