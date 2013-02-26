define(["knockout", "text!./generalLayout.html", "vent"], function(ko, template, vent) {
	return function(model){
		var self = this;

		self.items = ko.observableArray(model.left);		
		self.selected = ko.observable('');

		self.topItems = ko.observableArray(model.top);	
		self.topSelected = ko.observable('');
		


		self.html = template;
	}
});	