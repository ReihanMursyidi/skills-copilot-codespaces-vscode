// Create web server
// 1. Create a server
// 2. Listen on port 3000
// 3. When a request comes in, respond with "Hello, World!"
// 4. If the request comes in on the path "/comments" respond with "You requested comments!"
// 5. If the request comes in on the path "/comments/new" respond with "You requested a new comment!"
// 6. If the request comes in on the path "/comments/:id" respond with "You requested comment with id: {id}" where {id} is the id from the request

var http = require('http');
var url = require('url');

var server = http.createServer(function(request, response) {
  var path = url.parse(request.url).pathname;
  var id = path.split('/')[2];

  if (path === '/comments') {
    response.end('You requested comments!');
  } else if (path === '/comments/new') {
    response.end('You requested a new comment!');
  } else if (path === '/comments/' + id) {
    response.end('You requested comment with id: ' + id);
  } else {
    response.end('Hello, World!');
  }
});

server.listen(3000);
console.log('Server listening on port 3000');