
define(["knockout", "jquery",
	"app",
	"./view_models/list.js",
	"./view_models/add.js"
	],function(ko, $, app, StudentListViewModel, AddStudentViewModel) {
	
	var modul = {};

	modul.clear_popup = function(){
		app.popup(null);
	}	

	modul.show_students = function(){		
		app.content(new StudentListViewModel(modul));
	};

	modul.add_student = function(){
		app.popup(new AddStudentViewModel(modul));	
	};

	return modul;
});	