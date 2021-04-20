const fs = require('fs')
const http = require('http');
const path = require('path');

const data = require('./users')

// Create an HTTP server using only node.
// • Listen to that server with a specific port using only node.
// • Allow only GET requests to the server
http.createServer(function (req, res) {


  // Routes:
  // “/raw-html”
  // Return to the client some simple html. For example: <h1>Welcome</h1>
  if (req.method === 'GET' && req.url === '/raw-html/') {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.write('<h1>Welcome</h1>');
    res.end();
  }
  // Create a users.json file with some hard coded json data of users. Return to the client that json file.
  else if (req.method === 'GET' && req.url === '/users/') {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.write('<h1>Users</h1>');
    res.write(JSON.stringify(data));
    res.end();
  }
  // Create an index.html file.
  // Add to the html document an index.css and index.js file. Return to the client the index.html file.
  // add file without express or any library is not good
  else if (req.method === 'GET' && req.url === '/') {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.write('<h1>Main</h1>');
    const stream = fs.createReadStream('./indexFrSend.html')
    stream.pipe(res)

  }
  else {
    res.statusCode = 404;
    res.end();
  }

}).listen(8080);