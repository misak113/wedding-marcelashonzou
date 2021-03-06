
import express = require('express');
import serveStatic = require('serve-static');

export = Server;
class Server {

	static $service = 'Server';
	static $inject = [
		'express.Express',
	];
	constructor(
		private app: express.Express
	) {}

	start() {
		console.log('Start Server');
		this.app.set('views', __dirname + '/../../views');
		this.app.set('view engine', 'handlebars');
		this.app.engine('handlebars', require('express-handlebars')({ defaultLayout: 'main' }));
		this.app.use(serveStatic(__dirname + '/../../dist'));
		this.app.use(serveStatic(__dirname + '/../../public'));
		var port = process.env.PORT || 80;
		this.app.listen(port, () => console.info('Listen on port ' + port));
	}
}
