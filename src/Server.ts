
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
		this.app.listen(process.env.PORT || 80);
	}
}
