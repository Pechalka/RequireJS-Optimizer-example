
define([
    "libs/modul",
    "knockout", 
    "jquery",
    "sammy",
    "widgets/top_menu/TopMenuViewModel",
    "colorbox"
	],function(
        modul,
        ko, 
        $, 
		Sammy,
        TopMenu
		) {

	return Sammy(function(){
		var app = this;

		app.content = ko.observable(null);
        app.popup = ko.observable(null);

        app.nav = ko.observable(new TopMenu(['overview', 'students', 'teachers']));

        this.get('#/overview', function () {
            app.nav().selected_item('overview');
            
            modul('base').run('show_overview');
        });

        this.get('#/students', function () {
            app.nav().selected_item('students');
            
          //  modul('students').run('show_students');            
        });

        this.get('#/teachers', function () {
            app.nav().selected_item('teachers');
            
          //  modul('teachers').run('show_teachers');      
        });

        
        this.change_password = function(){
            modul('base').run('change_password');
        };

		this.get('', function () {	
       	    window.location = '#/overview';
        });
	});
});		