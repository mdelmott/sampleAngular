//Angular
require('angular');

//Modules
require('./common/common');
require('./module1/module1');
require('./module2/module2');
require('./error/error');

//Module APP
angular.module('TestApp', ['common', 'module1', 'module2', 'error']);