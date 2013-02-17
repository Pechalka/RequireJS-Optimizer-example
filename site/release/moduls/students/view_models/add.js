define(["knockout", "jquery",
	"text!../templates/add.html"
	],function(ko, $, overviewTemplate) {
	
	return function(modul){
		var self = this;

		self.html = overviewTemplate;
		self.init = function(){
			$.colorbox({
	            onClosed : modul.clear_popup,
	            inline : true,
	            href : '#add_student'
	        });
		};

		self.save = function(){
			modul.show_students();
			$.colorbox.close();
		}
	}
});	