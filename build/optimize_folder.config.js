({
	baseUrl: '../site',
	mainConfigFile: '../site/main.js',
	name: '../site/main',
	out: '../all_js.min.js',
	preserveLicenseComments: false,
	paths : {
		requireLib : 'vendor/require/require'
	},
	include : 'requireLib'
})