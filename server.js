var express = require('express')

var http = require('http');

http.createServer(function(request, response) {
  response.writeHead({
    'Content-Type' : 'text/plain'
  })
  response.end('HELLO WORLD');
}).listen(3000);