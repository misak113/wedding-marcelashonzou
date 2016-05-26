var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var events_1 = require('events');
var DateStore = (function (_super) {
    __extends(DateStore, _super);
    function DateStore() {
        var _this = this;
        _super.call(this);
        setInterval(function () {
            _this.emit('now', new Date());
        }, 1000);
    }
    DateStore.prototype.onNow = function (callback) {
        var listener = this.on('now', callback);
        callback(new Date());
        return listener;
    };
    DateStore.$service = 'DateTime.DateStore';
    return DateStore;
})(events_1.EventEmitter);
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = DateStore;
