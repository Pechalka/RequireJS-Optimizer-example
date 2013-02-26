define(["knockout", "text!./index.html", "vent"], function(ko, template, vent) {
	return function(){
		var self = this;

		self.show_add = function(){
			vent.trigger('show_add');
		};

		self.update = function(){
			alert('update');
		};

		self.html = template;
	}
});		