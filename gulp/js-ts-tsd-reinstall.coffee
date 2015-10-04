
gulp = require 'gulp'
tsd = require 'gulp-tsd'
paths = require './paths'

gulp.task 'js-ts-tsd-reinstall', (callback) ->
  tsd({
    command: 'reinstall',
    config: paths.tsd.config
  }, callback)
