angular.module('MyApp', [])

.controller('SharedController', function ($scope) {
	var self = this;
	self.attendee = {};

	self.processScan = function(){
		google.script.run.withSuccessHandler(function(response){
			var myResponse = JSON.parse(response);
			self.myAttendee = myResponse.employeeName;
			self.attendee = {};
			$scope.$apply();
		}).withFailureHandler(function(response){
			$scope.$apply();
		}).addScanToLog(self.attendee.id);
	};
	
})
;