/*jslint browser: true*/
/*global $, jQuery, Backbone*/

var Excercise1 = Backbone.Model.extend({
    initialize: function () {
        "use strict";
        this.bind("change:answer", function () {
            console.log("Answer change to " + this.get("answer"));
        });
        this.bind("error", function (model, error) {
            console.log(error);
        });
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
        console.log("start collection");
    },
    model : Excercise1
});

var excerciseOne = new Excercise1({
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
