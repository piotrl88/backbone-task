/*jslint browser: true*/
/*global $, jQuery, Backbone*/

var Excercise = Backbone.Model.extend({
    initialize: function () {
        "use strict";
    },
    defaults: {
        data : [{
            name: "",
            pict: "",
            answer: "",
            isValid: null
        }]
    }
});

var ExcerciseCollection = Backbone.Collection.extend({
    initialize : function () {
        "use strict";
    },
    model : Excercise
});

var excercise = new Excercise({
    data: [
        {
            name: "fogg",
            pict: "img/exercise1/1.png",
            isValid: null,
            answer: "foggy"
        },
        {
            name: "raining",
            pict: "img/exercise1/2.png",
            isValid: null,
            answer: "raining"
        },
        {
            name: "sunny",
            pict: "img/exercise1/3.png",
            isValid: null,
            answer: "sunny"
        },
        {
            name: "cloudy",
            pict: "img/exercise1/4.png",
            isValid: null,
            answer: "cloudy"
        },
        {
            name: "windy",
            pict: "img/exercise1/5.png",
            isValid: null,
            answer: "windy"
        },
        {
            name: "snowing",
            pict: "img/exercise1/6.png",
            isValid: null,
            answer: "snowing"
        }
    ]
});
