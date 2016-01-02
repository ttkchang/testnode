/**
 * Created by joe on 1/1/16.
 */
var http = require('http');
var port = 8180;

http.createServer(handle_request).listen(port, '127.0.0.1');
console.log('Server node.js started http server at 127.0.0.1/' + port);
