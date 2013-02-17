({
	baseUrl: '../site',
	mainConfigFile: '../site/main.js',
	name: '../site/main',
	preserveLicenseComments: false,
	
	//dir: "../site/release",
	
	out: '../site/all_js.min.js',
	
	paths : {
		requireLib : 'vendor/require/require'
		, base : 'moduls/base/modul'
	},
	include : ['requireLib', 'base']
	//include : 'requireLib'
})