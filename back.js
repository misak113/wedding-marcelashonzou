
var App = require("./dist/js/index");
var Util = require("asimplia-util");

var di = App.DI();

var server;
console.info('Starting Wedding "Marcela s Honzou"');
server = di.service(App.Server);
server.start();
