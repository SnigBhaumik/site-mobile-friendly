
'use strict';

const request = require('request');
const chalk = require('chalk');
const isjson = require('is-json');


const serverUrl = 'https://searchconsole.googleapis.com/v1/urlTestingTools/mobileFriendlyTest:run?fields=mobileFriendliness%2CmobileFriendlyIssues%2CresourceIssues%2Cscreenshot%2CtestStatus&key=';

const site = 'http://google.com';

var process = function(opts, cb) {
	console.log('Testing site ' + chalk.yellow.bgRed.bold(opts.site) + ' .....');
	
	var options = {
		url: serverUrl + opts.apiKey,
		headers: {
			'Content-Type': 'application/json',
			'X-Referer': "https://developers.google.com",
		},
		method: 'POST',
		body: JSON.stringify({
			url: opts.site || site,
			requestScreenshot: opts.requestScreenshot || true
		})
	};
	return runTest(options, cb);
}

var runTest = function(options, cb) {
	request.post(options, function(err, res){
		if (err)
			return cb(err);
		if (!isjson(res.body))
			return cb(chalk.red.bgWhite('Ooops, some issues! \n\n' + res.body));
			
		var data = JSON.parse(res.body);
		if (!data.testStatus)
			return cb(chalk.red.bgWhite('\n\nUnable to complete the operation.\nRecheck your API key?\n') + res.body);
			
		return cb(null, formatResult(data));
	});
}

var formatResult = function(res) {
	var status = res.testStatus ? res.testStatus.status : '';
	var mobileFriendliness = res.mobileFriendliness;
	var mobileFriendlyIssues = res.mobileFriendlyIssues;
	var screenshot = res.screenshot ? res.screenshot.data : '';
	var resourceIssues = res.resourceIssues;
		
	console.log(chalk.magenta.underline.bold('\n\nTESTING RESULTS -------'));
	
	console.log('Proecess ' + chalk.yellow(status)); 
	if (mobileFriendliness == 'MOBILE_FRIENDLY')
		console.log('Congrats, site is ' + chalk.cyan(mobileFriendliness));
	else
		console.log('Ahem, Google says site is ' + chalk.red.underline(mobileFriendliness));
		
	if (mobileFriendlyIssues && mobileFriendlyIssues.length) {
		console.log(chalk.red.bold.underline('Issues reported ----'));
		mobileFriendlyIssues.forEach(issue => {
			console.log(issue.rule);
		});
	}
	else
		console.log(chalk.green.bold.underline('No mobile issues reported.'));
		
	if (resourceIssues && resourceIssues.length) {
		console.log(chalk.red.bold.underline('Resource issues reported ----'));
		resourceIssues.forEach(issue => {
			console.log(issue.blockedResource.url);
		});
	}
	else
		console.log(chalk.green.bold.underline('No resource issues reported.'));

	console.log(chalk.magenta.underline.bold('REPORTING OVER.\n\n'));
		
	return res;
}

var addHttp = function(url) {
    if (!/^(?:f|ht)tps?\:\/\//.test(url)) {
        url = "http://" + url;
    }
    return url;
}


module.exports = {
	process,
	addHttp
};