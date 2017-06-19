/*
 * site-mobile-friendly - node cli.
 * https://github.com/SnigBhaumik/site-mobile-friendly
 *
 * Copyright (c) 2017 Snig Bhaumik.
 * MIT.
 */
 
 'use strict';

var yargs = require('yargs');
var utils = require('./lib/utils');

var argv = yargs.argv;
var opts = {
	apiKey: argv.apiKey || 'your_key',
	site: utils.addHttp(argv.site)
};

utils.process(opts, function(err, res) {
	if  (err) {
		console.log(err);
	}
});

