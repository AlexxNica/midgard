
var $ = require("jquery")
,   form = require("./login.hbs")
,   WidgetView = require("../../js/widget-view")
;

var Login = WidgetView.extend({
    initialise: function (data) {
        this.parentView = data.parentView;
    }
,   render: function () {
        this.$parent
            .html(form({}))
            .find("form")
            .submit(function () {
                this.trigger("login-attempt", $("#login-id").val(), $("#login-password").val());
                return false;
            })
        ;
    }
});

module.exports = Login;
