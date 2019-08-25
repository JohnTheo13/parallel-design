/* eslint-disable */
module.exports = function(api) {
	api.cache(true);

	return {
		presets: [
			"@babel/env",
			"@babel/react",
			"@babel/preset-flow",
			["minify", {
				"removeConsole": true
			}]
		]
	};
};
