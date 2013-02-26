define([ "sammy", "knockout", 
	'moduls/application/topMenu', 
	'moduls/application/userMenu', 
	'moduls/application/changeProfile', 
	'moduls/application/breadcrumbs',
	'moduls/application/studentSearch',
	'vent', 
	'colorbox'
	],function( Sammy, ko, TopMenu, UserMenu, ChangeProfileVM, Breadcrumbs, StudentSearch, vent) {
	return Sammy(function(){
		var app = this;

		app.topMenu = ko.observable(new TopMenu(['overview', 'students']));
		app.userMenu = ko.observable(new UserMenu());
		app.breadcrumbs = ko.observable(new Breadcrumbs());
		app.studentSearch = ko.observable(new StudentSearch());


		app.content = ko.observable(null);
		app.popup = ko.observable(null);

		vent.on('change_profile', function() {
			app.popup(new ChangeProfileVM());
			$.colorbox({
	                    onClosed : function(){
	                        app.popup(null);
	                    },
	                    inline : true,
	                    href : '#change-profile'
	                });
		});
	});
});		