var NEWHIRES = SpreadsheetApp.openById(PropertiesService.getScriptProperties().getProperty('newHireTracker'));
var SCANSS = SpreadsheetApp.openById(PropertiesService.getScriptProperties().getProperty('scanSs'));



function getNewHires(){
	var test, hires, myNewHires, idStub;

	hires = NVSL.getRowsData(NEWHIRES.getSheetByName('New Hires_Transfers'));
	myNewHires = hires.map(function(e){
		return new Hire(e);
	});
	idStub = 100001;
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
	debugger;
}