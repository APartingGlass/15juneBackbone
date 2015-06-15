var $ = require('jquery'),
    _ = require('underscore'),
    Backbone = require('backbone')

Backbone.$ = $
console.log('app0 successful')
var ApplicationRouter = Backbone.Router.extend({
    initialize: function() {
        console.log('router created')
        Backbone.history.start()
    }
})

export default ApplicationRouter
