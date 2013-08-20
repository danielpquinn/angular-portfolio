/*global console */
/*jslint sloppy: true, indent: 2 */

// Require libraries
var os = require('os'),
  fs = require('fs'),
  express = require('express'),
  site = express(),
  server = require('http').createServer(site),
  io = require('socket.io').listen(server),
  connections = 0;

site.use(express.basicAuth('portfolio', 'visitor'));

// Serve static files
site.use('/', express.static('./static'));

// Ensure all routes go home, client side app..
site.get('*', function (req, res) {
  fs.createReadStream('./static/index.html').pipe(res);
});

io.sockets.on('connection', function (socket) {
  connections += 1;
  socket.emit('update connections', { total: connections });
  socket.broadcast.emit('update connections', { total: connections });

  socket.on('disconnect', function () {
    connections -= 1;
    socket.broadcast.emit('update connections', { total: connections });
  });
});

// Actually listen
server.listen(8080);