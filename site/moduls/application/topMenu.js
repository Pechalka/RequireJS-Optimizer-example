define(["knockout", 'text!./topMenu.html', 'vent'],function(ko, template, vent) {
	return function(model){
		var self = this;

		self.items = ko.observableArray(model);

		self.selected = ko.observable(model[0]);

		vent.on('app:render', function(e, page_name) {
			if (page_name === 'overview' || page_name === 'students')
				self.selected(page_name);
			else
				self.selected('');
		});
		

		self.html = template;		
	}
});		