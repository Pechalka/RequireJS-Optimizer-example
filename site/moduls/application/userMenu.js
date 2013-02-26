define(["knockout", 'text!./userMenu.html', 'vent'],function(ko, template, vent) {
	return function(){
		var self = this;

		self.change_profile = function() {
			vent.trigger('change_profile');			
		};

		self.lagout = function() {
			alert('lagout');
		};


		self.selected = ko.observable('');

		vent.on('app:render', function(e, page_name) {
			if (page_name === 'catalog' || page_name === 'teachers')
				self.selected(page_name);
			else
				self.selected('');
		});

		self.html = template;		
	}
});		