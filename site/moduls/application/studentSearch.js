define(["knockout", 'text!./studentSearch.html', 'vent'], function(ko, template, vent) {
	return function(model){
		var self = this;

		self.q = ko.observable('');

		self.search = function(argument) {			
			location = '#/students?q=' + self.q();
			self.q('');
		}

		self.html = template;		
	}
});		