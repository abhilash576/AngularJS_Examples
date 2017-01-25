var module = angular.module("mymodule",[]);
module.controller("ctrl", Main);
function Main($scope) {
    $scope.username = "";
    $scope.x= new Date();
    $scope.updateTime = function() {
             $scope.x= new Date();
    }
}

