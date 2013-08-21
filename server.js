/*global console */
/*jslint sloppy: true, indent: 2 */

// Require libraries
var os = require('os'),
  fs = require('fs'),
  express = require('express'),
  site = express(),
  server = require('http').createServer(site);

site.use(express.basicAuth('portfolio', 'visitor'));

// Serve static files
site.use('/', express.static('./static'));

// Ensure all routes go home, client side app..
site.get('*', function (req, res) {
  fs.createReadStream('./static/index.html').pipe(res);
});

// Actually listen
server.listen(8080);
