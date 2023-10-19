var fs = require('fs');

// The file name to read
var fileName = 'hello.txt';

// Read the content of the file
fs.readFile(fileName, function (err, data) {
  if (err) {
    console.error('Error reading file: ' + err);
  } else {
    console.log('Data from "' + fileName + '": ' + data);
  }
});
