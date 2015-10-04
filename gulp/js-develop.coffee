
gulp = require 'gulp'
paths = require './paths'
server = require 'gulp-develop-server'
require './js'

gulp.task 'js-develop', ['js'], ->
  server.listen {
    path: paths.back.mainFile
  }

module.exports.restart = server.restart
