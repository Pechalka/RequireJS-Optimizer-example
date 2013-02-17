
require.config({
    paths: {
        "jquery": "vendor/jquery-latest",
        "knockout": "vendor/knockout/knockout-min",
        "ko.mapping" : "vendor/knockout/knockout.mapping",
        "text": "vendor/require/text",
        "sammy" : "vendor/sammy-latest.min",
        "bootstrap" : "vendor/bootstrap/js/bootstrap.min",
        "jquery.validate" : "vendor/jquery.validate/jquery.validate.min",
        "qq" : "vendor/qq/qq",

        "stringTemplateEngine": "libs/stringTemplateEngine",

        "colorbox" : "vendor/colorbox/jquery.colorbox-min"
    },
    shim: {
        "ko.mapping" : ["knockout"],
        "stringTemplateEngine": ["knockout"],
        "bootstrap" : ["jquery"],
        "jquery.validate" : ["jquery"],
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