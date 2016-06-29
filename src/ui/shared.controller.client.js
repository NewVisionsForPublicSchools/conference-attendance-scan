angular.module('MyApp', [])

.controller('SharedController', function ($scope) {
	var self = this;
	self.attendee = {};

	self.processScan = function(){
		self.myAttendee = self.attendee.id;
		self.attendee = {};
	};
	
})
;