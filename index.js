/*const http = require('http'); 
const data = require('./source')
http.createServer((req, res) => {
res.writeHead(200, {'Content-Type': 'application\json'})
res.write(JSON.stringify(data));
res.end();
}).listen(4000);*/

const express = require('express'); 
const app = express(); 
const PORT = 4000; 

app.use(express.json());

const userData = require('./useraccount')

app.get('/user', (req, res) => {
    res.send(userData);
})

app.get('/user/:id', (req, res) => {
    res.send(userData);
})

app.listen(PORT, ()=> {
    console.log(`App is listening on poert ${PORT}`);
})