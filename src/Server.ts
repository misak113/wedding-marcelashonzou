
import express = require('express');

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
		this.app.listen(process.env.PORT || 80);
	}
}
