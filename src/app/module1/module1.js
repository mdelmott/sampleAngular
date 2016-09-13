//module1 node modules
require('angular-route');

//Controller
var module1Ctrl = require('./Controllers/Module1Controller');

//Services
var service2Serv = require('./Services/service2');

//Driectives


//Config
angular.module('module1', ['ngRoute'])
    .config(function($routeProvider) {
        $routeProvider
            .when("/", {
                templateUrl : "./views/module1.html",
                controller: "module1Ctrl"
            })
    })
    .controller('module1Ctrl', module1Ctrl)
    .service('service2Serv', service2Serv);
