define(["knockout", "jquery",
	"text!../templates/list.html"
	],function(ko, $, overviewTemplate) {
	
	return function(modul){
		var self = this;

		self.html = overviewTemplate;

		self.add_student = function(){
			modul.add_student();
		};
	}
});	