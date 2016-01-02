/**
 * Created by joe on 1/1/16.
 */
var http = require('http');
var port = 8180;

function handle_request(request, response){
    response.writeHead(200, {
       'Content-Type': 'text/plain'
    });
    response.end('Hello World. - Are you restless to go restful?\n');
    console.log('requested');
}

http.createServer(handle_request).listen(port, '127.0.0.1');
console.log('Server node.js started http server at 127.0.0.1/' + port);
