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
            id: 1,
            name: "fogg",
            pict: "img/exercise1/1.png",
            isValid: null,
            answer: "foggy"
        },
        {
            id: 2,
            name: "raining",
            pict: "img/exercise1/2.png",
            isValid: null,
            answer: "raining"
        },
        {
            id: 3,
            name: "sunny",
            pict: "img/exercise1/3.png",
            isValid: null,
            answer: "sunny"
        },
        {
            id: 4,
            name: "cloudy",
            pict: "img/exercise1/4.png",
            isValid: null,
            answer: "cloudy"
        },
        {
            id: 5,
            name: "windy",
            pict: "img/exercise1/5.png",
            isValid: null,
            answer: "windy"
        },
        {
            id: 6,
            name: "snowing",
            pict: "img/exercise1/6.png",
            isValid: null,
            answer: "snowing"
        }
    ]
});
