
'use strict';

define(['angular','resource'],function(){

	angular.module('iWay.services.common', ['ngResource'])
	.factory('iWayHttpService', ['$q','$http',function($q, $http) {

				var httpService = {};
				 
				httpService.querywithParams = function(url,params) {
					var deferred = $q.defer();
					$http({
						method : 'get',
						url : url,
						params:params,
                        headers: {
							"Content-Type": "application/json;charset=UTF-8",
							"X-Requested-With": "XMLHttpRequest"
						}
					}).success(function(data, status, headers, config) {
						deferred.resolve(data);
					}).error(function(reason, status, headers, config) {
						deferred.reject(reason);
					});
					return deferred.promise;
				};
					
				return httpService;

	} ]);

});// end for define

