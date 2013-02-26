define([
	"moduls/students/index", 
	"moduls/students/add", 
	"app",
	"vent",
	"colorbox"], 
	function(IndexVM, AddVM, app, vent) {
	var openPopup = function(user){
		app.popup(new AddVM(user, vent));
		$.colorbox({
                    onClosed : function(){
                        app.popup(null);
                    },
                    inline : true,
                    href : '#popup'
                });
	};

	vent.on('show_add', openPopup);
	vent.on('save_student', function(){
		app.content().update();	
	});

	return {
		showIndex : function(){		
			app.content(new IndexVM(vent));						
		}
	}
});	