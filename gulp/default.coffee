
gulp = require 'gulp'
require './js-ts'
require './css-less'

gulp.task 'default', [
  'js-ts'
  'css-less'
]
