define(["moduls/overview/index", "app"], function(VM, app) {
	return {
		showIndex : function(){
			app.content(new VM('vasa'));
		}
	}
});	