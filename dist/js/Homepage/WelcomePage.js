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
        this.state = {
            rest: {
                days: null,
                hours: null,
                minutes: null,
                seconds: null,
            }
        };
    }
    WelcomePage.prototype.componentWillMount = function () {
        var _this = this;
        this.dateStore.onNow(function (now) { return _this.updateTime(now); });
    };
    WelcomePage.prototype.render = function () {
        return (React.createElement("div", {"className": "welcome"}, React.createElement("div", {"className": "info"}, "Jestliže si někdo se svatebním darem hlavu láme,", React.createElement("br", null), "tak vězte, že už doma skoro všechno máme.", React.createElement("br", null), "A proto Vám malý tip můžeme dát,", React.createElement("br", null), "jelikož se budeme brát,", React.createElement("br", null), "potěší nás příspěvek v jakékoli výši,", React.createElement("br", null), "který nám rozpočet na domácnost zvýší.", React.createElement("br", null), "Děkujeme"), this.notYet() ? React.createElement("div", {"className": "rest-time"}, "Zbývá ", this.state.rest.days
            ? React.createElement("span", {"className": "important"}, this.state.rest.days, "  ", this.format(this.state.rest.days, 'den', 'dny', 'dní'), ",   ")
            : null, this.state.rest.hours
            ? React.createElement("span", {"className": "important"}, this.state.rest.hours, "  ", this.format(this.state.rest.hours, 'hodina', 'hodiny', 'hodin'), ",   ")
            : null, this.state.rest.minutes
            ? React.createElement("span", null, this.state.rest.minutes, "   ", this.format(this.state.rest.minutes, 'minuta', 'minuty', 'minut'), ",   ")
            : null, this.state.rest.seconds
            ? React.createElement("span", null, this.state.rest.seconds, "   ", this.format(this.state.rest.seconds, 'vteřina', 'vteřiny', 'vteřin'), "  ")
            : null) : React.createElement("div", {"className": "rest-time bigger"}, "Už jsou svoji :)"), React.createElement("div", {"className": "wedding-date"}, "6. 6. 2016", React.createElement("br", null), "Čertousy"), React.createElement("div", {"className": "time"}, moment(this.state.now).format('YYYY-MM-DD hh:mm:ss'))));
    };
    WelcomePage.prototype.notYet = function () {
        return moment(this.state.now).isBefore(this.getTargetMoment());
    };
    WelcomePage.prototype.getTargetMoment = function () {
        return moment('2016-06-06 11:15:00');
    };
    WelcomePage.prototype.updateTime = function (now) {
        var nowMoment = moment(now);
        var days = this.getTargetMoment()
            .diff(nowMoment, 'days');
        var hours = this.getTargetMoment()
            .subtract(days, 'days')
            .diff(nowMoment, 'hours');
        var minutes = this.getTargetMoment()
            .subtract(days, 'days')
            .subtract(hours, 'hours')
            .diff(nowMoment, 'minutes');
        var seconds = this.getTargetMoment()
            .subtract(days, 'days')
            .subtract(hours, 'hours')
            .subtract(minutes, 'minutes')
            .diff(nowMoment, 'seconds');
        var rest = {
            days: days,
            hours: hours,
            minutes: minutes,
            seconds: seconds
        };
        this.setState({
            now: now,
            rest: rest
        });
    };
    WelcomePage.prototype.format = function (count, one, two, five) {
        switch (true) {
            case count === 1:
                return one;
            case count > 1 && count < 5:
                return two;
            default:
                return five;
        }
    };
    return WelcomePage;
})(Component_1.default);
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = WelcomePage;
