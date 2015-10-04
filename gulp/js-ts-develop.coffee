
gulp = require 'gulp'
paths = require './paths'
server = require 'gulp-develop-server'
require './js-ts'

gulp.task 'js-ts-develop', ['js-ts'], ->
  server.listen {
    path: paths.basePath + '/app.js'
  }

module.exports.restart = server.restart
