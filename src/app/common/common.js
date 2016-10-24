//Controller
var commonCtrl = require('./Controllers/CommonController');

//Services

//Directives
var combobox = require('./Directives/combobox');

//Config
angular.module('common', [])
    .controller('commonCtrl', commonCtrl)
    .directive('combobox', combobox);
