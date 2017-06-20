/*
 * site-mobile-friendly - api.
 * https://github.com/SnigBhaumik/site-mobile-friendly
 *
 * Copyright (c) 2017 Snig Bhaumik.
 * MIT.
 */
 
'use strict';

var utils = require('./lib/utils');

module.exports = function (params, cb) { 
	cb = cb || function () {};
  
	var opts = {
		apiKey: params.apiKey || 'your_key',
		site: utils.addHttp(params.site)
	};

	utils.process(opts, function(err) {
		cb(err);
	});
}

