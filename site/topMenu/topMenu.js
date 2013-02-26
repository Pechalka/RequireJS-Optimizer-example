define(["knockout", 'text!./topMenu.html'],function(ko, template) {
	return function(model){
		var self = this;

		self.items = ko.observableArray(model);

		self.selected = ko.observable(model[0]);

		self.html = template;		
	}
});		