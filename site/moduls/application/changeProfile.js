define(["knockout", 'text!./changeProfile.html'],function(ko, template) {
	return function(model){
		var self = this;

		self.html = template;		
	}
});		