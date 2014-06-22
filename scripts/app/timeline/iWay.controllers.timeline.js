
'use strict';

define(['angular'],function(){

		console.log('timeline');

		// timeline controller module
		var timelineController = angular.module('iWay.controllers.timeline', []);

		// timeline controller
		timelineController.controller('timelineCtrl',['$scope','iWayHttpService','$http',function($scope,iWayHttpService,$http){

			iWayHttpService.querywithParams('ajax/timeline.json',null).then(function(data){
			 	console.log(data);
			 	$scope.timelineData = data;
			});

		}]);


});// end for define
