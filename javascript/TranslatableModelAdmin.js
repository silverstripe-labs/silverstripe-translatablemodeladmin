(function($) {
$(document).ready(function() {
	$('#Form_EditForm_createtranslation').live('click', function() {
		var url = $('#Form_EditForm').attr('action')
			+ '/?action_createtranslation=1&ajax=1'
			+ '&newlang=' + $('#Form_EditForm_NewTransLang').val()
			+ '&SecurityID=' + $('#Form_EditForm_SecurityID').val();
			
    		$('#ModelAdminPanel').fn('addHistory', url);
    		$('#ModelAdminPanel').fn('loadForm', url);
    		$('#SearchForm_holder select#LangSelector').val($('#Form_EditForm_NewTransLang').val());
    		$('#SearchForm_holder input#Locale').val($('#Form_EditForm_NewTransLang').val());
		return false;
	});


	var _TRANSLATING_LANG = null;
	$('#LangSelector').change(function() {
		document.location = SiteTreeHandlers.controller_url + '?locale=' + this.value;
	});
	
	$('#right #_translation_link li a')
	    .live('click', function(){
    		var el = $(this);
    		$('#ModelAdminPanel').fn('addHistory', el.attr('href'));
    		$('#ModelAdminPanel').fn('loadForm', el.attr('href'));
    		return false;
    	});
})
})(jQuery);