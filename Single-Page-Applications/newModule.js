//Create a new Module
angular.module('newModule', [])

//Creates a surface that creates a data
angular.module('newModule').factory('datastore',
    function(){
        return {
            getData: function(){
                return 'Data Store';
            }
        };
    }
);

//Configure the module with a Controller
angular.module('newModule').controller('newController',
    function($scope, datastore){
        $scope.name = datastore.getData();
        $scope.time = (new Date()).toLocaleString();
        $scope.updateTime = function(){
            $scope.time = (new Date()).toLocaleString();
        };
    }      
);

