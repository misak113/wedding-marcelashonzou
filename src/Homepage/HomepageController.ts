
import express = require('express');

export = HomepageController;
class HomepageController {

	static $service = 'Homepage.HomepageController';
	static $inject = [
		'express.Express',
	];
	static $run = true;
	constructor(
		private app: express.Express
	) {
		this.app.get('/', (req: express.Request, res: express.Response) => this.indexAction(req, res));
	}

	private indexAction(req: express.Request, res: express.Response) {
		res.render('Homepage/index', {
			title: 'Marcela a Honza se berou'
		});
	}

}
