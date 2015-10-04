
gulp = require 'gulp'
paths = require './paths'
require './js-ts'

gulp.task 'watch-js-ts', ['js-ts'], ->
  files = [
    paths.tsd.src
    paths.ts.src + '/**/*.ts'
    paths.ts.src + '/**/*.tsx'
  ]
  return gulp.watch files, ['js-ts']
