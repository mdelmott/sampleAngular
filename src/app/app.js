require('angular');
require('./module1/module1');
require('./module2/module2');

angular.module('TestApp', ['module1','module2']);