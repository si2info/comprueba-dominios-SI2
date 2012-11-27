App.Services = (function(lng, app, undefined) {
 
    var getSearch = function(search_term){
        
		var si2_search_url = "http://si2.info/apli/phpwhois/si2dominios.back.jsonp.php";
		var si2dominios_params = {
            dominio : encodeURIComponent(search_term),
			callback: '?'
        };
        
        //  mostrar cargando 
        lng.Sugar.Growl.show ('Consultando disponibilidad', '',  'loading', true, 0);
 
		console.error("ok dentro buscando:" + search_term);

		
		lng.Service.Settings.async = false;
		lng.Service.get(si2_search_url, si2dominios_params, function(response) {
		//Do something with response
			console.error(response);
			
            //data = response.results;
			data = response;
			
			//console.error(data);
			
            var data_to_bind = [];
			var data_to_bind_cab = [];
            var vacio = false;
			var icono="question";
			var euros="";
			var accion="";
 
 /*
			data_to_bind_cab.push({
					dominio : search_term
            });
			App.View.pinta_cabresultados(data_to_bind_cab);
*/

            if (data.length == 0){
 
                var vacio = true;
                 data_to_bind.push({
					id : "no_disponible",
                    icono: icono,
					accion: '',
					tld : "No disponible",
					euros : '',
                    estado: ''
                });
 
            }
            for (var i = 0; i < data.length; i++){
                if (data[i]['estado']=='ocupado'){
                    euros = '';		
					accion="obtener datos";
					icono= '<span class="icon close" style="color: red;"></span>';
					comienzoenlace='<a href="#" class="undominio pop">';
					finenlace='</a>';
					
					
					
                }else{
					euros='<div class="onright count bubble">' + data[i]['precio'] + ' &euro;</div>'
					accion="reservar";
					icono= '<span class="icon check" style="color: green;"></span>';
					comienzoenlace='<a href="mailto:si2@si2.info?subject=Solicitud de reserva del dominio ' + data[i]['dominio'] + '">';
					finenlace='</a>';
					
                }
 
                data_to_bind.push({
					id : data[i]['tld'],
					icono : icono,
                    accion: accion,
                    tld : data[i]['dominio'],
                    euros: euros,
                    estado: data[i]['estado'],
                    comienzoenlace:comienzoenlace,
                    finenlace:finenlace
                });
            }
			
		console.error(data_to_bind);	
		
		App.View.pinta_resultados(data_to_bind);	
		lng.Sugar.Growl.hide();				
		});
		
		
	
    }

		
    return {
        getSearch: getSearch
    }
 
})(LUNGO, App);