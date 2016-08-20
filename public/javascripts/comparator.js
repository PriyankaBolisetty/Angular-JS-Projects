var comparator = angular.module('comparator', []);

comparator.factory('API', function ($http) {
    return {
        max: function (callback, data2) {
                $http({method: 'POST', url: '/max', data: data2})
                    .success(callback)
                    .error(function (data, status, headers, config) {
                        console.error("Error requesting '" + url + "'.");
                })},
        min: function (callback, data2) {
                $http({method: 'POST', url: '/min', data: data2})
                    .success(callback)
                    .error(function (data, status, headers, config) {
                        console.error("Error requesting '" + url + "'.");
                })}
    };
});

comparator.controller('comparatorCtrl', function ($scope, API) {
    $scope.max = function() {
        var data = {
            n1: $scope.n1,
            n2: $scope.n2
        };
        console.log(data);
        API.max(function(result) {
            console.log(result);
           $scope.result = result.max; 
        }, data);
        
    };
    
    $scope.min = function() {
        var data = {
            n1: $scope.n1,
            n2: $scope.n2
        };
        console.log(data);
        API.min(function(result) {
            console.log(result);
           $scope.result = result.min; 
        }, data);
    };
});