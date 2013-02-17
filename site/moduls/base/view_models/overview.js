define(["knockout", "jquery",
	"text!../views/overview.html"
	],function(ko, $, overviewTemplate) {
	
	return function(modul){
		var self = this;

		self.html = overviewTemplate;
	}
});		