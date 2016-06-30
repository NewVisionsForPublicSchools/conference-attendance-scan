function setMyScriptProperties(){
	PropertiesService.getScriptProperties().setProperty('pageTitle', 'The Bourne Identity');
	PropertiesService.getScriptProperties().setProperty('newHireTracker', '13OHcfpTsBotrgRWC0Hhxtlt_AQCVor13RfJrBD4HRyI');
	PropertiesService.getScriptProperties().setProperty('scanSs', '1M2FwDq7V7puTVDkeIhHoy4I5YEQ6XG4QkyiPJIdBZTU');
}



function addSheetsToSs(){
	var test, ss, firstSheet;

	ss = SpreadsheetApp.openById(PropertiesService.getScriptProperties().getProperty('scanSs'));
	firstSheet = ss.getSheetByName('Sheet1');
	firstSheet.setName('Attendee List');
}



function addHeadersToAttendeeList(){
	var test, headers, ss, sheet, range;

	headers = ['Employee Name', 'Employee ID', 'School', 'Title', 'Start Date', 'Email', 'Barcode'];
	ss = SpreadsheetApp.openById(PropertiesService.getScriptProperties().getProperty('scanSs'));
	sheet = ss.getSheetByName('Attendee List');
	range = sheet.getRange(1,1,1,headers.length);
	range.setValues([headers])
	.setBackground('black')
	.setFontColor('white')
	.setFontWeight('bold');
	sheet.setFrozenRows(1);
}