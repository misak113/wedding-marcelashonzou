
import Util = require('asimplia-util');
import services = require('./config/services');

var di: Util.DI.DependencyInjection;

export import Server = require('./Server');
export function getDependencyInjection() {
	'use strict';
	if (!di) {
		di = new Util.DI.DependencyInjection('wedding-marcelashonzou', services);
	}
	return di;
}
