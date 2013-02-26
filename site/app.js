define([ "sammy", "knockout", 'topMenu/topMenu'],function( Sammy, ko, TopMenu) {
	return Sammy(function(){
		var app = this;

		app.topMenu = ko.observable(new TopMenu(['overview', 'students', 'teachers']));

		app.content = ko.observable(null);
		app.popup = ko.observable(null);


        this.get('#/overview', function () { 
			require(['overview'], function(modul){
	    		modul.showIndex();
	    	});

	    	app.topMenu().selected('overview');
        });

		this.get('#/teachers', function () { 

			app.content(null);
	    	app.topMenu().selected('teachers');
        });

        this.get('#/students', function () { 

        	require(['students'], function(modul){
	    		modul.showIndex();
	    	});
	    	app.topMenu().selected('students');
        });

		
		this.get('', function () {	
       	    window.location = '#/overview';
        });
	});
});		