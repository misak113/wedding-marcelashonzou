
gulp = require 'gulp'
paths = require './paths'
server = require 'gulp-develop-server'

gulp.task 'js-ts-develop', ->
  server.listen {
    path: paths.basePath + '/app.js'
  }

module.exports.restart = server.restart
