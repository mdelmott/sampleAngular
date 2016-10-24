module.exports = function ($scope) {

    $scope.isShown = false;
    $scope.text = "All";

    $scope.click = function () {
        $scope.isShown = !$scope.isShown;
    };

    $scope.changeCheckedValues = function (String) {
        var total = 0;
        if(String === "All"){
            if($scope.listItem[String] != true){
                angular.forEach($scope.listItem, function(value,key){
                    $scope.listItem[key] = false;
                });
            }
            $scope.listItem[String] = true;
            $scope.text = "All";
        }else {
            if ($scope.listItem["All"] == true) {
                $scope.listItem["All"] = false;
                $scope.listItem[String] = true;
                $scope.text = "Combinated";
            } else {
                $scope.listItem[String] = !$scope.listItem[String];
                angular.forEach($scope.listItem, function (item) {
                    if (item == true) {
                        total = total + 1;
                    }
                });
                if (total == Object.keys($scope.listItem).length - 1 || total == 0) {
                    angular.forEach($scope.listItem, function (value, key) {
                        $scope.listItem[key] = false;
                    });
                    $scope.listItem["All"] = true;
                    $scope.text = "All";
                }else{
                    $scope.text = "Combinated";
                }
            }
        }
    };
};