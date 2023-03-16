const http = require('http'); 
const data = require('./source')
//const data = {name: 'Carlos Flores', email: 'cflores057@mail.fresnostate.edu', age: 26}
http.createServer((req, res) => {
res.writeHead(200, {'Content-Type': 'application\json'})
res.write(JSON.stringify(data));
res.end();
}).listen(4000);