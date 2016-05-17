var express = require('express');
var http = require('http');
var Util = require('asimplia-util/build/src/index');
var services = {
    'http.Server': {
        $inject: ['express.Express'],
        $factory: function (app) {
            return http.createServer(app);
        }
    },
    'express.Express': {
        $factory: function () {
            return express();
        }
    },
    'Util:ErrorLogger': Util.ErrorLogger,
    'Util:Express.StatusManager': Util.Express.StatusManager,
    'Util:AOP.AspectInterception': {
        $class: Util.AOP.AspectInterception,
        $inject: [
            Util.DI.ServiceAutoload,
            Util.Env.EnvConfigOverrider,
            Util.Collection.Progress.ProgressListLogger,
            Util.Console.LogPrefixer,
        ],
        $factory: function (serviceAutoload, envConfigOverrider, progressListLogger, logPrefixer) {
            return new Util.AOP.AspectInterception('farfalia-process', {
                'Util.Env.EnvConfigOverrider': envConfigOverrider,
                'Util:DI.ServiceAutoload': serviceAutoload,
                'Util:Collection.Progress.ProgressListLogger': progressListLogger,
                'Util:Console.LogPrefixer': logPrefixer
            });
        }
    },
    'Util:AOP.AnnotationAspects': {
        $class: Util.AOP.AnnotationAspects,
        $args: [__dirname + '/..']
    },
    'Util:DI.ServiceAutoload': {
        $class: Util.DI.ServiceAutoload,
        $args: [__dirname + '/..']
    },
    'Util:Env.EnvConfigOverrider': {
        $class: Util.Env.EnvConfigOverrider,
        $args: [__dirname + '/../../..']
    },
    'Util:Collection.Progress.ProgressListLogger': Util.Collection.Progress.ProgressListLogger,
    'Util:Console.LogPrefixer': Util.Console.LogPrefixer,
    'Util:MethodLocker': Util.MethodLocker,
    'Util:DateTime.DateFactory': Util.DateTime.DateFactory
};
module.exports = services;
