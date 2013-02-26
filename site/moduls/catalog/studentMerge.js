define(["knockout", "text!./studentMerge.html", "vent"], function(ko, template, vent) {
	return function(model){
		var self = this;


		self.topItems = ko.observableArray(model);	
		self.topSelected = ko.observable('');
		


		self.html = template;
	}
});	