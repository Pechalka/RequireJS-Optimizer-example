
require.config({
    paths: {
        "jquery": "vendor/jquery-latest",
        "knockout": "vendor/knockout/knockout-min",
        "ko.mapping" : "vendor/knockout/knockout.mapping",
        "text": "vendor/require/text",
        "sammy" : "vendor/sammy-latest.min",

        "stringTemplateEngine": "libs/stringTemplateEngine",

        "overview" : "moduls/overview/modul"
    },
    shim: {
        "ko.mapping" : ["knockout"],
        "stringTemplateEngine": ["knockout"],
        "sammy" : ["jquery"]
    }
});

require([
	"knockout",
    "jquery",

    "app",
    "stringTemplateEngine"
    ], function(ko, $, app){        
		$(function() {
			ko.applyBindings(app);
            app.run();
		});	
});