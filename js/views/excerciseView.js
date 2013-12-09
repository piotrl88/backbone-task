/*jslint browser: true*/
/*global $, jQuery, Backbone, excercise*/

var ExcerciseView = Backbone.View.extend({
    el: '.content',
    initialize: function () {
        "use strict";
        this.template = _.template($("#list-template").html());
        this.render();
    },
    events: {
        "click button": "validate"
    },
    render: function () {
        "use strict";
        var data = this.model.get('data'), items;
        items = {
            data : data
        };
        this.$el.html(this.template(items));
        return this.el;
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
