module.exports = function (grunt) {
	var GruntConfiguration = require('asimplia-util').GruntConfiguration;

	var tsFiles = ["src/**/*.ts"];
	var tsModulesFiles = ["node_modules/asimplia-util/src/**/*.ts"];

 	// Project configuration.
	var config = GruntConfiguration([], [], [], tsFiles.concat(tsModulesFiles), tsFiles, [
		'typings/tsd.d.ts',
	], __dirname);
	grunt.initConfig(config);
	GruntConfiguration.registerTasks(__dirname, grunt);

	GruntConfiguration.loadParentNpmTasks(grunt, 'grunt-typescript');
	GruntConfiguration.loadParentNpmTasks(grunt, 'grunt-jasmine-node');
	GruntConfiguration.loadParentNpmTasks(grunt, 'grunt-contrib-watch');
	GruntConfiguration.loadParentNpmTasks(grunt, 'grunt-contrib-clean');
	GruntConfiguration.loadParentNpmTasks(grunt, 'grunt-tsd');
	GruntConfiguration.loadParentNpmTasks(grunt, 'grunt-develop');
	GruntConfiguration.loadParentNpmTasks(grunt, 'grunt-shell');
	GruntConfiguration.loadParentNpmTasks(grunt, 'grunt-wait');
	GruntConfiguration.loadParentNpmTasks(grunt, 'grunt-tslint');

	grunt.registerTask('default', [
		'clean:build',
		'tsd:link:build',
		'tsd:reinstall',
		'wait:typings',
		'typescript:build',
		'tslint:all',
	]);
	grunt.registerTask('dev', [
		'typescript:build',
		'develop:app',
		'watch:ts'
	]);
	grunt.registerTask('prepublish', [
		'default'
	]);
	grunt.registerTask('test', function () {

	});

};
