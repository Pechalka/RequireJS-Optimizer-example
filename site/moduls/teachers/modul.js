
define(["knockout", "jquery",
	"app",
	"./view_models/list.js",
	"./view_models/add.js"
	],function(ko, $, app, ListViewModel, AddViewModel) {
	
	var modul = {};

	modul.clear_popup = function(){
		app.popup(null);
	}	

	modul.show_teachers = function(){		
		app.content(new ListViewModel(modul));
	};

	modul.add_teachers = function(){
		app.popup(new AddViewModel(modul));	
	};

	return modul;
});	