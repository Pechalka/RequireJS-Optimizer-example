define(["knockout", "text!./index.html"], function(ko, template) {
	return function(model){
		var self = this;

		self.name = ko.observable(model);

		self.html = template;
	}
});		