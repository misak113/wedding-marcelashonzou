
gulp = require 'gulp'
require './js-back'
require './js-front'

gulp.task 'js', [
  'js-back'
  'js-front'
]
