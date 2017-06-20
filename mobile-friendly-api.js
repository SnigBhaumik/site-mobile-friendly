/*
 * site-mobile-friendly - api.
 * https://github.com/SnigBhaumik/site-mobile-friendly
 *
 * Copyright (c) 2017 Snig Bhaumik.
 * MIT.
 */
 
'use strict';

var utils = require('./lib/utils');

exports.process = function(params) { 
	var opts = {
		apiKey: params.apiKey || 'your_key',
		site: utils.addHttp(params.site)
	};

	utils.process(opts, cb) {
		return cb;
	});
}
