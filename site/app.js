define([ "sammy", "knockout"],function( Sammy, ko) {
	return Sammy(function(){
		var app = this;

		app.content = ko.observable(null);

        this.get('#/overview', function () { 
			require(['overview'], function(modul){
	    		modul.showIndex('Vasa');
	    	});
        });
		
		this.get('', function () {	
       	    window.location = '#/overview';
        });
	});
});		