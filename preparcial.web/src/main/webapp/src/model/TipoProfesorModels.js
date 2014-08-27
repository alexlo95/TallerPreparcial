define(['model/TipoProfesorModels'], function() {
//Aqu� se define la estructura de un �tem de la lista. Note que el modelo extiende el modelo est�ndar backbone.
    App.Model.TipoProfesorModel = Backbone.Model.extend({
        defaults: {
         'name' : '',
         'tipo' : ''
        },
        getDisplay: function(name) {
         return this.get(name);
        }
        });
//Aqu� se define el modelo de la lista. El modelo de la lista extiende de Backbone.Collection. En el atributo �model� se define el modelo  (definido arriba) que corresponde al molde de cada uno de los �tems de la lista.
    App.Model.TipoProfesorList = Backbone.Collection.extend({
        model: App.Model.SportPromedioModel
    });
    return  App.Model.SportPromedioModel;
});