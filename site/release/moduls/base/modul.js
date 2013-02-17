define(["knockout", "jquery", 
	"moduls/base/view_models/overview",
	"app",
	"moduls/base/view_models/ChangePasswordViewModel"
	],function(ko, $, OverviewViewModel, app, ChangePasswordViewModel) {
	
	var modul = {};	
	
	modul.clear_popup = function(){
		app.popup(null);
	}	

	modul.show_overview = function(){
		app.content(new OverviewViewModel(modul));
	};

	modul.change_password = function(){
		app.popup(new ChangePasswordViewModel(modul));
	};

	modul.edit_profile = function(){

	};

	return modul;
});	