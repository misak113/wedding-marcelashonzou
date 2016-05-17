var serveStatic = require('serve-static');
var Server = (function () {
    function Server(app) {
        this.app = app;
    }
    Server.prototype.start = function () {
        console.log('Start Server');
        this.app.set('views', __dirname + '/../../views');
        this.app.set('view engine', 'handlebars');
        this.app.engine('handlebars', require('express-handlebars')({ defaultLayout: 'main' }));
        this.app.use(serveStatic(__dirname + '/../../dist'));
        this.app.use(serveStatic(__dirname + '/../../public'));
        var port = process.env.PORT || 80;
        this.app.listen(port, function () { return console.info('Listen on port ' + port); });
    };
    Server.$service = 'Server';
    Server.$inject = [
        'express.Express',
    ];
    return Server;
})();
module.exports = Server;
