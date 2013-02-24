({
	baseUrl: '../site',
	mainConfigFile: '../site/main.js',
	preserveLicenseComments: false,
	
	dir: "../site/release",
	
	//out: '../site/all_js.min.js',
	
//	optimize: "none",

	paths : {
		requireLib : 'vendor/require/require',
		overview : "moduls/overview/modul",
		vendor : 'vendor/vendor'
	},

	modules:[
		// {
		// 	name : 'vendor',
		// 	include : ['knockout', 'jquery', 'requireLib', 'text', 'sammy']
		// //	create: true
		// },
		{
			name : 'main',
			include : ['vendor']			
		},
		{
			name : 'overview',
			exclude : ['vendor']
		}
	]
})