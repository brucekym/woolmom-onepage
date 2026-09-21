function doPost(e) {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  var data = e.parameter;
  sheet.appendRow([
    new Date(),
    data.name || '',
    data.phone || '',
    data.region || '',
    data.email || '',
    data.hasStore || '',
    data.timing || '',
    data.planType || '',
    data.referrer || '',
    data.message || ''
  ]);
  return ContentService.createTextOutput(JSON.stringify({ result: 'success' }))
    .setMimeType(ContentService.MimeType.JSON);
}
