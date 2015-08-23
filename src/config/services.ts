
import express = require('express');
import http = require('http');
import Util = require('asimplia-util');

var services: { [name: string]: any } = {
	'http.Server': {
		$inject: ['express.Express'],
		$factory: (app: express.Express) => {
			return http.createServer(app);
		}
	},
	'express.Express': {
		$factory: () => {
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
		$factory: (
			serviceAutoload: Util.DI.ServiceAutoload,
			envConfigOverrider: Util.Env.EnvConfigOverrider,
			progressListLogger: Util.Collection.Progress.ProgressListLogger,
			logPrefixer: Util.Console.LogPrefixer
		) => {
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
		$args: [__dirname + '/../..']
	},
	'Util:Collection.Progress.ProgressListLogger': Util.Collection.Progress.ProgressListLogger,
	'Util:Console.LogPrefixer': Util.Console.LogPrefixer,
	'Util:MethodLocker': Util.MethodLocker,
	'Util:DateTime.DateFactory': Util.DateTime.DateFactory
};
export = services;
