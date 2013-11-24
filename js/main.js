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
        name: "",
        pict: "",
        answer: "",
        isValid: null
    }
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

var ExcerciseView = Backbone.View.extend({
    el : '#container',
    initialize : function () {
        "use strict";
        console.log("initialized");
        this.template = $("#list-template").children();
        this.render();
    },
    events : {
        "click button" : "validate"
    },
    render : function () {
        "use strict";
        var data = this.model.get('data'), i, li, img, input;
        for(i = 0; i < data.length; i++) {
            li = this.template.clone();
            img = li.find('img').attr({src : data[i].pict}).end();
            input = li.find('input').val(data[i].name).end();
            li.append(img);
            li.append(input);
            this.$el.find('ul').append(li);
        }
    },
    validate : function (attributes) {
        "use strict";
        console.log(attributes);
        /*if(attributes.answer === $.trim(this.get('answer').toLowerCase())) {
         return this.set('isValid', "valid");
         } else {
         return this.set('isValid', "invalid");
         }*/
    }
});

var excercise = new ExcerciseView({model : excerciseOne});
