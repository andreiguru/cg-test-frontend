const http = require('http'),
  serveStatic = require('serve-static'),
  port = process.env.PORT || 8000,
  serve = serveStatic('static', { index: ['index.html'] });

http
  .createServer(function(req, res) {
    if (req.url.indexOf('/ad') === 0) {
      return require('./lib/http-handle-ads')(req, res);
    }

    if (req.url.indexOf('/api') === 0) {
      return require('./lib/http-handle-api')(req, res);
    }
    // default: handle the request as a static file
    serve(req, res);
  })
  .listen(port);

console.log('Listening on http://localhost:%d', port);
