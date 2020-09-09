(function(){
    //protect from bleeding things into the global scope
    'use strict';

    angular.module('NameCalculator',[])
    
    //--$variableName = reserved for Angular
    //----ex. $scope
    .controller('NameCalculatorController', function($scope){
        
        //--declare variable
        $scope.name = "";
        $scope.totalValue = 0
        $scope.totalNameValue = 0;
        
        //--function
        $scope.displayResult = function () {
            var totalNameValue = calculateNumericForString($scope.name);
            $scope.totalValue = totalNameValue;
        };

        function calculateNumericForString(string){
            var totalStringValue = 0;
            for (var i=0; i < string.length; i++) {
                totalStringValue += string.charCodeAt(i);
            }
            return totalStringValue;
        }
        
    });

})();



