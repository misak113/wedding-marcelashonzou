
gulp = require 'gulp'
ts = require 'gulp-typescript'
merge = require 'merge2'
paths = require './paths'
require './js-ts-tsd'

gulp.task 'js-ts-build', ['js-ts-tsd'], ->
  tsProject = ts.createProject paths.ts.config
  tsResult = gulp.src([
    paths.tsd.src
    paths.ts.src + '/**/*.ts'
    paths.ts.src + '/**/*.tsx'
  ])
    .pipe ts(tsProject)
  return merge [
    tsResult.dts.pipe(gulp.dest(paths.dist + '/definitions'))
    tsResult.js.pipe(gulp.dest(paths.dist + '/js'))
  ]
