(function(){
    //protect from bleeding things into the global scope
    'use strict';

    angular.module('MyFirstApp',[])
    
    //--$variableName = reserved for Angular
    //----ex. $scope
    .controller('MyFirstController', function($scope){
        
        //--variable
        $scope.name = "Goog";
        
        //--function
        $scope.sayHello = function () {
            return "Hello Goog!"
        };
    });

})();