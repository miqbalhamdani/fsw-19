const http = require('http');
const fs = require('fs');

http.createServer(function (req, res) {
  //Open a file on the server and return its content:
  fs.readFile('blog.html', function(err, data) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(data);
    return res.end();
  });
}).listen(8080);

// http://localhost:8080
