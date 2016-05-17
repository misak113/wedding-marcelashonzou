import express = require('express');
export = Server;
declare class Server {
    private app;
    static $service: string;
    static $inject: string[];
    constructor(app: express.Express);
    start(): void;
}
