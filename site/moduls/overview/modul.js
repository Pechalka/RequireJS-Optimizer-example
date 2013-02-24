define(["moduls/overview/index", "app"], function(VM, app) {
	return {
		showIndex : function(name){
			app.content(new VM(name));
		}
	}
});	