/*
 * site-mobile-friendly - gulp wrapper.
 * https://github.com/SnigBhaumik/site-mobile-friendly
 *
 * Copyright (c) 2017 Snig Bhaumik.
 * MIT.
 */
 
'use strict';
 
var gulp = require('gulp');
var yargs = require('yargs');

var utils = require('./lib/utils');

var argv = yargs.argv;
var opts = {
	apiKey: argv.apiKey || 'your_key',
	site: utils.addHttp(argv.site)
};

gulp.task('default', function() {
	utils.process(opts, function(err, res) {
		if  (err) {
			console.log(err);
		}
	});
});

