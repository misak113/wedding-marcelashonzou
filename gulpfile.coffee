
gulp = require 'gulp'
require './gulp/js-ts'
require './gulp/js-ts-watch'

gulp.task 'default', [
  'js-ts'
]

gulp.task 'watch', [
  'js-ts-watch'
]
