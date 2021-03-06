({
	baseUrl: '../site',
	mainConfigFile: '../site/main.js',
	preserveLicenseComments: false,
	
	dir: "../site/release",
	
	//out: '../site/all_js.min.js',
	
//	optimize: "none",

	paths : {
		requireLib : 'vendor/require/require',
		overview : "moduls/overview/modul"
	//	vendor : 'vendor/vendor'
	},

	modules:[
		{
			name : 'main',
			include : ['knockout', 'jquery', 'requireLib', 'text', 'sammy', 'stringTemplateEngine', 'vent', 'colorbox']
	//		create: true
		},
		{
			name : 'overview',
			exclude : ['main']
		},
		{
			name : 'students',
			exclude : ['main']
		},
		{
			name : 'catalog',
			exclude : ['main']
		}
	]
})