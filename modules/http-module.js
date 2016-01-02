/**
 * Created by joe on 1/2/16.
 */
function handle_GET_request(response){
    response.writeHead(200, {
        'Content-Type': 'text/plain'
    });
    response.end('Get action was requested');
    console.log('Get action was requested');
}

function handle_POST_request(response){
    response.writeHead(200, {
        'Content-Type': 'text/plain'
    });
    response.end('Hello World. POST\n');
    console.log('POST Action was requesed');
}

function handle_PUT_request(response){
    response.writeHead(200, {
        'Content-Type': 'text/plain'
    });
    response.end('Hello World. PUT\n');
    console.log('PUT Action was requesed');
}


function handle_HEAD_request(response){
    response.writeHead(200, {
        'Content-Type': 'text/plain'
    });
    response.end('Hello World. HEAD\n');
    console.log('HEAD Action was requesed');
}

function handle_DELETE_request(response){
    response.writeHead(200, {
        'Content-Type': 'text/plain'
    });
    response.end('Hello World. DELETE\n');
    console.log('DELETE Action was requesed');
}

function handle_bad_request(response){
    response.writeHead(200, {
        'Content-Type': 'text/plain'
    });
    response.end('Hello World. bad\n');
    console.log('bad Action was requesed');
}

exports.handle_request = function(request, response){
    switch (request.method) {
        case 'GET':
            handle_GET_request(response);
            break;
        case 'POST':
            handle_POST_request(response);
            break;
        case 'PUT':
            handle_PUT_request(response);
            break;
        case 'HEAD':
            handle_HEAD_request(response);
            break;
        case 'DELETE':
            handle_DELETE_request(response);
            break;
        default:
            handle_bad_request(response);
            break;
    }
    console.log('Request processing ended.');
};