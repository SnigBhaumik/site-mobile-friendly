# site-mobile-friendly
Checks if the site is mobile-friendly (by Google Search Console API). Renders detailed reports.

# Sample Output (by Node CLI)
![Mobile Friendly Test Result](https://github.com/SnigBhaumik/site-mobile-friendly/blob/master/screens/mobile-test-result.png?raw=true)
 
# Installing
```sh
$ npm install --save site-mobile-friendly
$ site-mobile-friendly --apiKey <<your-key>> --site www.google.com
```

Hint: For local development run `npm link` in your git folder to make it available as a command named `site-mobile-friendly` for your system.

# Background
> Part of our Dev Ops automation process. After deploying the application in one of the servers, Mobile friendly testing should have been done automatically. This Node module is used and triggered by Jenkins build pipeline to report the web portal mobile friendlyness.
> Can be used for any type of web site and portal.

# Pre requisites
- Following [Google Mobile Friendly Test](https://search.google.com/test/mobile-friendly) (Beta) 
- Uses [Google Mobile Friendly Test API](https://developers.google.com/webmaster-tools/search-console-api/reference/rest/v1/urlTestingTools.mobileFriendlyTest/run)
- You need to obtain an [API Key from Google](https://developers.google.com/webmaster-tools/search-console-api/v1/configure)

# Usage

## Node CLI
You need to pass two command line arguments (both mandatory).
- `apiKey`: the API key you have obtained [from Google](https://developers.google.com/webmaster-tools/search-console-api/v1/configure)
- `site`: the url of the site you are going to test

```sh
$ node index --apiKey <<your-key>> --site www.google.com
```

## Gulp
You need to pass two command line arguments (both mandatory).
- `apiKey`: the API key you have obtained [from Google](https://developers.google.com/webmaster-tools/search-console-api/v1/configure)
- `site`: the url of the site you are going to test

```sh
$ gulp --apiKey <<your-key>> --site www.google.com
```

## API
Use the `mobile-friendly-api` module for this.
```js
var mobile_test = require('site-mobile-friendly/mobile-friendly-api');
var params = {
	apiKey: '<<your-key>>',
	site: 'www.google.com'
};

mobile_test(params, function(err) {
	if (err)	console.log(err);
});
```

# License
MIT
