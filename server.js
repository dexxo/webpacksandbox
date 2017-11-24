const http = require('http');
const finalhandler = require('finalhandler');
const serveStatic = require('serve-static');

// Serve up dist
const serve = serveStatic('dist', {'index': ['index.html', 'index.htm']});

// Create server
const server = http.createServer(function onRequest (req, res) {
  serve(req, res, finalhandler(req, res));
});

// Listen
server.listen({port: 8080}, function(){
  console.log('server listening on port 8080...');
});