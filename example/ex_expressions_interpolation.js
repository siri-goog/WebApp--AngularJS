(function(){

    'use strict';

    angular.module('MsgApp',[])
    .controller('MsgController', MsgController);
    
    MsgController.$inject = ['$scope'];
    function MsgController($scope) {
        $scope.name = "Goog";
        $scope.stateOfBeing = "hungry";

        $scope.sayMessage = function () {
            return "Goog is very hungry!!"
        };

        $scope.feedGoog = function () {
            $scope.stateOfBeing = "fed";
        };
    };
})();