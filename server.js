var http = require('http');

var server = http.createServer(function (req, res) {
  res.setHeader('Content-Type', 'text/html');
  res.end('<h1>Hello Node!!!!</h1>\n');
});

var PORT = 3000;

server.listen(PORT, function () {
  console.log('Server is running on http://localhost:' + PORT);
});
