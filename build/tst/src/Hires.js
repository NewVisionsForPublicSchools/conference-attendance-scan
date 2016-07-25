var NEWHIRES = SpreadsheetApp.openById(PropertiesService.getScriptProperties().getProperty('newHireTracker'));



function Hire(record){
	this.employeeName = record.employeeName;
	this.school = record.school;
	this.title = record.jobTitle;
	this.startDate = record.startDate;
	this.email = record.workEmail;
	this.employeeId = record.positionId;
	return this;
}



Hire.prototype.getBarcode = function() {
	var url = '"https://www.barcodesinc.com/generator/image.php?code=' + encodeURI(this.employeeId) + '&style=452&type=C128B&width=500&height=100&xres=1&font=5"';
	this.barcode = this.employeeId ? '=image(' + url + ', 3)' : '';
	return this.barcode;
};



Hire.prototype.getTempId = function(stub) {
	this.employeeId = 'TBD' + stub;
	return this.employeeId;
};