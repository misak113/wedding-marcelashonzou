var HomepageController = (function () {
    function HomepageController(app) {
        var _this = this;
        this.app = app;
        this.app.get('/', function (req, res) { return _this.indexAction(req, res); });
    }
    HomepageController.prototype.indexAction = function (req, res) {
        res.render('Homepage/index', {
            title: 'Marcela a Honza se berou'
        });
    };
    HomepageController.$service = 'Homepage.HomepageController';
    HomepageController.$inject = [
        'express.Express',
    ];
    HomepageController.$run = true;
    return HomepageController;
})();
module.exports = HomepageController;
