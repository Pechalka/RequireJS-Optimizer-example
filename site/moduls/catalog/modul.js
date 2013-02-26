define([
	"moduls/catalog/general",
	"moduls/catalog/generalLayout",
	"moduls/catalog/studentMerge",	
	"app",
	"vent"], 
	function(GeneralVM, GeneralLayoutVM, StudentMergeVM, app, vent) {

	var genera_catalog_items = 	['SchoolTimePattern', 'SchoolYear', 'MediaBoxSetup', 
				'InterventionLocation', 'SchoolLocation', 'Subjects', 
				'EthnicityLables', 'LetterTemplates'];

	var top_items = ['General', 'Interventions', 'StudentMerge'];			

	return {
		showGeneral : function(){		
			app.content(new GeneralVM({ left : genera_catalog_items , top : top_items}));
			app.content().topSelected('General');						
		},
		showEthnicityLables : function() {
			app.content(new GeneralLayoutVM({ left : genera_catalog_items , top : top_items}));
			app.content().selected('EthnicityLables');
			app.content().topSelected('General');
		},
		ShowOffenseCode : function() {
			app.content(new GeneralLayoutVM({ left : ['OffenseCodes', 'ElementaryPrizes'] , top : top_items}));
			app.content().selected('OffenseCodes');

			app.content().topSelected('Interventions');
		},
		ShowStudentMerge : function() {
			app.content(new StudentMergeVM(top_items));
			app.content().topSelected('StudentMerge');
		}
	}
});	