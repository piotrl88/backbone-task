/*jslint browser: true*/
/*global $, jQuery, Backbone, excerciseOne*/

var ExcerciseView = Backbone.View.extend({
    el: '#container',
    initialize: function () {
        "use strict";
        this.template = $("#list-template").children();
        this.render();
    },
    events: {
        "click button": "validate"
    },
    render: function () {
        "use strict";
        var data = this.model.get('data'), i, li, img, input, p;
        this.$el.find('ul').empty();
        for (i = 0; i < data.length; i++) {
            li = this.template.clone();
            img = li.find('img').attr({src: data[i].pict}).end();
            input = li.find('input[type=text]').val(data[i].name).end();
            p = li.find('p').text(data[i].isValid);
            li.append(img);
            li.append(input);
            li.append(p);
            this.$el.find('ul').append(li);
        }
    },
    validate: function (e) {
        "use strict";
        var answers = $("#formAnswers").serializeArray(), i, formAnswer, model;
        model = this.model.get('data');
        for (i in answers) {
            formAnswer = $.trim(answers[i].value).toLowerCase();
            model[i].name = formAnswer;
            if (model[i].name === model[i].answer) {
                model[i].isValid = true;
            } else {
                model[i].isValid = false;
            }
        }
        this.render();
    }
});

var excercise = new ExcerciseView({model: excerciseOne});