App.Events = (function(lng, app, undefined) {

	var makeSearch = function(){
		//console.error(app.Data.getSearchTerm());
        app.Services.getSearch(app.Data.getSearchTerm());
    }
	
	lng.dom('#buscar a').tap(function(event){
	
		App.Data.setSearchTerm($$("#buscar input").val());
		console.error('ok fuera');
		makeSearch();
	});


/*
    lng.dom('.undominio').tap(function(event) {
        setTimeout(function() {
            lng.Router.section('sectiondatosdeundominio#datosdeundominio');
        }, 100);
    });
*/
    return {

    }

})(LUNGO, App);