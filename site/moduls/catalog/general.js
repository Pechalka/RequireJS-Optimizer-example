define(["knockout", "text!./general.html", "vent"], function(ko, template, vent) {
	return function(model){
		var self = this;

		self.items = ko.observableArray(model.left);

		self.topItems = ko.observableArray(model.top);	
		self.topSelected = ko.observable('');
		


		self.html = template;
	}
});		