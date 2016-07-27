var NEWHIRES = SpreadsheetApp.openById(PropertiesService.getScriptProperties().getProperty('newHireTracker'));
var SCANSS = SpreadsheetApp.openById(PropertiesService.getScriptProperties().getProperty('scanSs'));



function getNewHires(){
	var test, hires, myNewHires, idStub;

	hires = NVSL.getRowsData(NEWHIRES.getSheetByName('Onboarding Attendance'));
	myNewHires = hires.map(function(e){
		return new Hire(e);
	});
	idStub = 1001;
	myNewHires.forEach(function(e){
		e.getTempId(idStub);
		e.getBarcode();
		idStub++;
	});
	scanSheet = SCANSS.getSheetByName('Attendee List');
	NVSL.setRowsData(scanSheet, myNewHires);
	scanSheet.autoResizeColumn(1).autoResizeColumn(2).autoResizeColumn(4).autoResizeColumn(6).setColumnWidth(7,400);

	for(var i=0;i<scanSheet.getLastRow()+1;i++){
		scanSheet.setRowHeight(i+2, 120);
	}

	barcodeRange = scanSheet.getRange('G:G');
	barcodeRange.setHorizontalAlignment('center').setVerticalAlignment('center');
}



function addScanToLog(id){
	var test, scanSheet, attendeeList, attendee, scan, headerRange;

	scanSheet = SCANSS.getSheetByName('Scans');
	attendeeList = NVSL.getRowsData(SCANSS.getSheetByName('Attendee List'));
	attendee = attendeeList.filter(function(e){
		return e.employeeId == id;
	})[0];
	scan = {
		employeeId: attendee.employeeId,
		employeeName: attendee.employeeName,
		timestamp: new Date()
	};
	headerRange = scanSheet.getRange(1,1,1,scanSheet.getLastColumn());
	NVSL.setRowsData(scanSheet, [scan], headerRange, scanSheet.getLastRow()+1);

	return JSON.stringify(attendee);
}