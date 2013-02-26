define([ "sammy", "app", "vent"],function( Sammy, app, vent) {
	return Sammy(function(){
        this.get('#/overview', function () { 
			require(['overview'], function(modul){
	    		modul.showIndex();
	    	});
			vent.trigger('app:render', 'overview');
	    	
        });

		this.get('#/teachers', function () { 

			app.content(null);

			vent.trigger('app:render', 'teachers');
        });

        this.get('#/students', function () { 

        	require(['students'], function(modul){
	    		modul.showIndex();
	    	});
	    	vent.trigger('app:render', 'students');
        });

		this.get('#/catalog', function () { 

			require(['catalog'], function(modul){
	    		modul.showGeneral();
	    	});

        	vent.trigger('app:render', 'catalog');
        });

		this.get('#/EthnicityLables', function () { 

			require(['catalog'], function(modul){
	    		modul.showEthnicityLables();
	    	});

        	vent.trigger('app:render', 'catalog');
        });

		this.get('#/OffenseCodes', function () { 

			require(['catalog'], function(modul){
	    		modul.ShowOffenseCode();
	    	});

        	vent.trigger('app:render', 'catalog');
        });

		this.get('#/StudentMerge', function () { 

			require(['catalog'], function(modul){
	    		modul.ShowStudentMerge();
	    	});

        	vent.trigger('app:render', 'catalog');
        });
        
        this.get('#/Interventions', function () {	
       	    window.location = '#/OffenseCodes';
        });

        this.get('#/General', function () {	
       	    window.location = '#/catalog';
        });

		this.get('', function () {	
       	    window.location = '#/overview';
        });
	});
});		