import express = require('express');
export = HomepageController;
declare class HomepageController {
    private app;
    static $service: string;
    static $inject: string[];
    static $run: boolean;
    constructor(app: express.Express);
    private indexAction(req, res);
}
