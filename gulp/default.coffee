
gulp = require 'gulp'
require './js'
require './css-less'

gulp.task 'default', [
  'js'
  'css-less'
]
