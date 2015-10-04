
import * as Util from 'asimplia-util/build/src/index';
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
