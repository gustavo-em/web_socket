const WebSocket = require('ws');
const express = require('express')
const app = express()


// const http = require('http');
// const WebSocket = require('ws');

// const port = 6969;
// const server = http.createServer(express);
// const wss = new WebSocket.Server({ server })

app.get('/', function(req, res){
    console.log('a')
    const ws = new WebSocket('ws://10.7.7.1:6969'); 
    ws.onopen = ()=>{
        console.log('conectou rota')
        ws.send('log')
    }
    ws.onmessage = ({ data }) => console.log('msg');
    
    res.send('hello word1')
})

app.listen('3333', ()=>console.log('runing'))