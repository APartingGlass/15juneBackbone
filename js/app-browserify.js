"use strict";
// es5 polyfills, powered by es5-shim
require("es5-shim")
// es6 polyfills, powered by babel
require("babel/register")
var Promise = require('es6-promise').Promise
require('whatwg-fetch') //--> not a typo, don't store as a var

// require your own libraries, too!
var MyAppRouter = require('./app0.js')

window.addEventListener('load', app)

function app() {
    // start app
    var startApp = new MyAppRouter()
}

