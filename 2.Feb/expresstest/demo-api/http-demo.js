const http = require('http');

function onRequest (request,response) {
    response.writeHead (200,{'content-Type' : 'text/html'});
    response.write("짱구는 못말려..");
    response.end();
}

http.createServer(onRequest).listen(8888);
// http 모듈에 createServer 함수에서 할일을 다 한 다음에
// onRequest 콜백 함수를 실행시켜 달라고 매개변수로 던진것.
