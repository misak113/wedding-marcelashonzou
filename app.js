
var App = require("./build/index");
var Util = require("asimplia-util");

var di = App.getDependencyInjection();

var server;
console.info('Starting Wedding "Marcela s Honzou"');
server = di.service(App.Server);
server.start();
