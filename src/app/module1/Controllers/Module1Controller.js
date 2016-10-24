module.exports = function($scope,
                          service2Serv){
    //$scope.user = "Martin";

    /*$scope.helloWorld = function(){
        return "Hello World!!";
    }*/

    $scope.listItem = {
        "All": true,
        "Item1": false,
        "Item2": false,
        "Item3": false,
        "Item4": false
    };

    $scope.listItem2 = {
        "All" : true,
        "I1" : false,
        "I2" : false,
        "I3" : false,
        "I4" : false,
        "I5" : false,
        "I6" : false,
        "I7" : false,
        "I8" : false,
        "I9" : false,
        "I10" : false,
        "I11" : false,
        "I12" : false
    };

    $scope.isCollapsedHorizontal  = false;
};