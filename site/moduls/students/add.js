define(["knockout", "text!./add.html"], function(ko, template) {
	return function(model, vent){
		var self = this;

		self.save_student = function(){
			vent.trigger('save_student');
			$.colorbox.close();
		};

		self.html = template;
	}
});		