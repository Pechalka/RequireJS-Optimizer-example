
require.config({
    paths: {
        "jquery": "vendor/jquery-latest",
        "knockout": "vendor/knockout/knockout-min",
        "ko.mapping" : "vendor/knockout/knockout.mapping",
        "text": "vendor/require/text",
        "sammy" : "vendor/sammy-latest.min",
        "colorbox" : "vendor/colorbox/jquery.colorbox-min",


        "stringTemplateEngine": "libs/stringTemplateEngine",

        "overview" : "moduls/overview/modul",
        "students" : "moduls/students/modul"

    },
    shim: {
        "ko.mapping" : ["knockout"],
        "stringTemplateEngine": ["knockout"],
        "sammy" : ["jquery"],
        "colorbox" : ["jquery"]
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