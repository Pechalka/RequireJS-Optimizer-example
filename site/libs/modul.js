define(["knockout", "jquery"

	],function(ko, $) {
		return function(name){
            var run = function(method){
                require(['moduls/' + name + '/modul' ], function(modul){
                    modul[method]();
                });    
            }

            return {
                run : run
            };
        }
});