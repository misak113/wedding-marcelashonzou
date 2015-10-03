
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
		this.app.set('views', __dirname + '/../views');
		this.app.set('view engine', 'handlebars');
		this.app.engine('handlebars', require('express-handlebars')({ defaultLayout: 'main' }));
		this.app.use(require( 'express-less-middleware' )(__dirname + '/../public'));
		this.app.use(serveStatic(__dirname + '/../public'));
		this.app.get('/css/index');
		this.app.listen(process.env.PORT || 80);
	}
}
