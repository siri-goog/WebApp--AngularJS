(function(){

    'use strict';

    angular.module('LunchCheck',[])
    .controller('LunchCheckController', LunchCheckController);
    
    LunchCheckController.$inject = ['$scope'];
    function LunchCheckController($scope) {
        //Declare variables
        $scope.input = "";
        $scope.msg = "";
        $scope.msgStyle = "";

        $scope.checkLunch = function () {
            //Declare local variable
            var input = $scope.input;
            var items = [];
            var noOfItems = 0;
            
            //Check input
            if (input == ""){
                $scope.msg = "Please enter data first";
                $scope.msgStyle = {color:'red'};
                $scope.tbStyle = {border:'1px solid red'};
            } else {
                //split() = method that divides a string into an order list
                items = input.split(',');
                
                //Check number of items
                for (var i=0; i < items.length; i++) {
                    //check empty item
                    if (items[i].trim() != "") {
                        //Not an empty item
                        noOfItems += 1;
                    }
                }

                //Display message
                if (noOfItems >= 1 && noOfItems <= 3) {
                    $scope.msg = "Enjoy!";
                    $scope.msgStyle = {color:'green'};
                    $scope.tbStyle = {border:'1px solid green'};
                } else {
                    $scope.msg = "Too much!";
                    $scope.msgStyle = {color:'green'};
                    $scope.tbStyle = {border:'1px solid green'};
                }
            };
        };
    };
})();