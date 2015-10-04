
basePath = __dirname + '/..'

paths = {
  basePath: basePath
  dist: basePath + '/dist'
  ts:
  	config: basePath + '/tsconfig.json'
  	src: basePath + '/src'
  tsd:
  	config: basePath + '/tsd.json'
  	src: basePath + '/typings/tsd.d.ts'
  less:
    src: basePath + '/src/index.less'
}
module.exports = paths
