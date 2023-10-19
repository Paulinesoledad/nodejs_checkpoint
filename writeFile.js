
var fs = require('fs');

// Text to write to the file
var textToWrite = 'Hello Node';

// The file name
var fileName = 'welcome.txt';

// Write the text to the file
fs.writeFile(fileName, textToWrite, function (err) {
  if (err) {
    console.error('Error writing to file: ' + err);
  } else {
    console.log('File "' + fileName + '" has been created with the content: ' + textToWrite);
  }
});
