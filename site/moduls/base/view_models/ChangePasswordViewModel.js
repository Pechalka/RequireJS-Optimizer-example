define(["knockout", "jquery",
	"text!../views/ChangePasswordViewModel.html"
	],function(ko, $, html) {
	
	return function(modul){
		var self = this;

		self.html = html;
		
		self.init = function(){
			$.colorbox({
	            onClosed : modul.clear_popup,
	            inline : true,
	            href : '#change_password'
	        });
		};

		self.change = function(){
			$.colorbox.close();
		}
	}
});		