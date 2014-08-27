/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

define(['model/seccionCupoModel'], function() {
    App.Model.SeccionCupoModel = Backbone.Model.extend({
        defaults: {
         'cupoMaximo' : '',
         'inscritos' : '',
         'name' : '',
         'disponibles' : ''
        },
        getDisplay: function(name) {
         return this.get(name);
        }
        });
    App.Model.SeccionesCuposList = Backbone.Collection.extend({
        model: App.Model.SeccionCupoModel
    });
    return  App.Model.SeccionCupoModel;
});

