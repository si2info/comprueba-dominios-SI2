App.View = (function(lng, app, undefined) {

/*
<li data-icon="right">
<small class="onright">obtener datos</small>
<h2>.COM</h2>
<small>ocupado</small>
</li>
*/					
 
	var markup = '<li class="selectable" id="{{id}}">{{icono}}{{comienzoenlace}}<small class="onright">{{accion}}</small><h2>{{tld}}</h2>{{euros}}<small>{{estado}}</small>{{finenlace}}</li>';
    lng.View.Template.create('resultados-template', markup);

    var pinta_resultados = function(datos){
        lng.View.Template.render('#dominios_container', 'resultados-template', datos);
    }

    return{
        pinta_resultados: pinta_resultados
    }
 
 
})(LUNGO, App);