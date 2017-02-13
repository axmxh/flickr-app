/**
 * Created by axmxh on 2/13/17.
 */
(function () {
    'use strict'

    angular.module('flickrApp',[])
        .controller('Login', ['$scope', '$http', function ($scope, $http) {
            $scope.results = [];

            $scope.LoginWithFlickr = function () {
                $http({
                    method: 'GET',
                    url: 'https://api.flickr.com/services/rest/',
                    params: {
                        method: 'flickr.photos.search',
                        api_key: '822b50d24a41f5ac0be5ecfadb0c4a6f',
                        text: $scope.searchFor,
                        format: 'json',
                        nojsoncallback: 1
                    }
                }).then(function(data) {
                    $scope.results = data;
                    console.log($scope.results);
                },function(error) {
                    console.error(error);
                });
            };
        }]);
})();
