const WebSocket = require("ws");

(function(){
    console.log(WebSocket)
    const ws = new WebSocket('ws://localhost:9090');

    ws.on('open', function open() {
    ws.send('something');
    });

    ws.on('message', function message(data) {
    console.log('received: %s', data);
    });
})()