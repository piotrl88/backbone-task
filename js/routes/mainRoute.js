/*jslint browser: true*/
/*global $, jQuery, Backbone, excercise, ExcerciseView*/

var AppRouter = Backbone.Router.extend({
    routes : {},
    initialize : function () {
        "use strict";
        var ex = new ExcerciseView({model: excercise});
    }
});

var app = new AppRouter();