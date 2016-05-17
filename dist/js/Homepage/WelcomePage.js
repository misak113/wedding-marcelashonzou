var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var React = require('react');
var moment = require('moment');
var Component_1 = require('../React/Component');
var DateStore_1 = require('../DateTime/DateStore');
var WelcomePage = (function (_super) {
    __extends(WelcomePage, _super);
    function WelcomePage(props, context) {
        _super.call(this, props, context);
        this.dateStore = new DateStore_1.default;
        this.state = {};
    }
    WelcomePage.prototype.componentWillMount = function () {
        var _this = this;
        this.dateStore.onNow(function (now) { return _this.setState({ now: now }); });
    };
    WelcomePage.prototype.render = function () {
        return (React.createElement("div", {"className": "welcome"}, React.createElement("div", {"className": "info"}, "Jestliže si někdo se svatebním darem hlavu láme,", React.createElement("br", null), "tak vězte, že už doma skoro všechno máme.", React.createElement("br", null), "A proto Vám malý tip můžeme dát,", React.createElement("br", null), "jelikož se budeme brát,", React.createElement("br", null), "potěší nás příspěvek v jakékoli výši,", React.createElement("br", null), "který nám rozpočet na domácnost zvýší.", React.createElement("br", null), "Děkujeme"), React.createElement("div", {"className": "wedding-date"}, "6. 6. 2016", React.createElement("br", null), "Čertousy"), React.createElement("div", {"className": "time"}, moment(this.state.now).format('YYYY-MM-DD hh:mm:ss'))));
    };
    return WelcomePage;
})(Component_1.default);
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = WelcomePage;
