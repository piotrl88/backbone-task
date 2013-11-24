/*jslint browser: true*/
/*global $, jQuery, Backbone*/

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
        for (i = 0; i < data.length; i++) {
            li = this.template.clone();
            img = li.find('img').attr({src : data[i].pict}).end();
            input = li.find('input[type=text]').val(data[i].name).end();
            li.append(img);
            li.append(input);
            this.$el.find('ul').append(li);
        }
    },
    validate : function (attributes) {
        "use strict";
        var answers = $("#formAnswers").serializeArray(), i, answer;
        for (i in answers ) {
            answer = $.trim(answers[i].value).toLowerCase();
            console.log("------------------");
            console.log("Answer: " + answer);
            console.log("------------------");
        }
        /*if(attributes.answer === $.trim(this.get('answer').toLowerCase())) {
         return this.set('isValid', "valid");
         } else {
         return this.set('isValid', "invalid");
         }*/
    }
});

var excercise = new ExcerciseView({model : excerciseOne});