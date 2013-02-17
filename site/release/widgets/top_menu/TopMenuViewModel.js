define(["knockout", "jquery",
	"text!./TopMenuViewModel.html"
	],function(ko, $, html) {
	
	return function(modul){
		var self = this;

		self.items = ko.observableArray(modul);
		self.selected_item = ko.observable(null);

		self.html = html;
	}
});	