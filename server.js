const express = require('express');
const http = require('http');
const WebSocket = require('ws');

const port = 6969;
const server = http.createServer(express);
const wss = new WebSocket.Server({ server })

// wss.clients.forEach(function each(client) {
//   setInterval(()=>{
//     console.log('data')
//     client.send('ss');
//   }, 1000)
// })

wss.on('connection', function connection(ws) {
  console.log('connected')
  setInterval(()=>{
    ws.send('LOG')
  }, 2000)
  ws.on('message', function incoming(data) {
    console.log('message')
    // wss.clients.forEach(function each(client) {
    //     client.send(data.toString('utf8'));
    // })
  })

  wss.close(()=>{
    console.log('desconnected')
  })
  wss.on('close', ()=>console.log('closed'))
})



server.listen(port, function() {
  console.log(`Server is listening on ${port}!`)
})