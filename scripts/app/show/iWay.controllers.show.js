
'use strict';

define(['angular'],function(){

		console.log('show');

		// show controller module
		var showController = angular.module('iWay.controllers.show', []);

		// show controller
		showController.controller('showCtrl',['$scope','iWayHttpService',function($scope){
			$scope.user = {
			    name: 'show',
			    age: 22, 
			};

			//iWayHttpService.httpService('','');

			// call ajax

			console.log($scope.user);
		}]);


});// end for define
