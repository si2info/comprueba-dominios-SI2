App.Data = (function(lng, app, undefined) {
 
    var term = "si2";
    var setSearchTerm = function(par_term) {
        term = par_term;
    }
 
    var getSearchTerm = function (){ return term; }
 
    return {
        setSearchTerm : setSearchTerm,
        getSearchTerm : getSearchTerm,
    }
 
})(LUNGO, App);