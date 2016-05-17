var Util = require('asimplia-util/build/src/index');
var services = require('./config/services');
var di;
exports.Server = require('./Server');
function DI() {
    'use strict';
    if (!di) {
        di = new Util.DI.DependencyInjection('wedding-marcelashonzou', services);
    }
    return di;
}
exports.DI = DI;
