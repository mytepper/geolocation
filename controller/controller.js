'use strict';


app.controller('geoCtrl', ['$scope','$http', function($scope,$http) {
    $scope.address = "www.google.com";
    $scope.find = function() {
    	var ip = $scope.address;
    	$http.jsonp('https://freegeoip.net/json/'+ip+'?callback=JSON_CALLBACK').success(function(data) {
		    $scope.ip = data.ip;
		    $scope.hostname = data.hostname;
		    $scope.country_code = data.country_code;
		    $scope.country_name = data.country_name;
		    $scope.region_code = data.region_code;
		    $scope.region_name = data.region_name;
		    $scope.city = data.city;
		    $scope.zip_code = data.zip_code;
		    $scope.time_zone = data.time_zone;
		    $scope.latitude = data.latitude;
		    $scope.longitude = data.longitude;
		    $scope.metro_code = data.metro_code;
		  });
    	console.log("geoCtrl Res");
    }
}]);