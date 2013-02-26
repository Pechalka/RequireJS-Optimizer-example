define(["knockout", "text!./index.html"], function(ko, template) {
	return function(vent){
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