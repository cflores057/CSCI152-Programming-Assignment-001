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
const bodyParser = require('body-parser');
const cors = require('cors'); 

app.use(bodyParser.json());
app.use(express.json());
app.use(cors());

const userData = require('./useraccount')

app.get('/users', (req, res) => {
    res.send(userData);
});

app.get('/user/:id', (req, res) => {
    const id = req.params.id; 
    const user = user.find((u) => u.id === id);

    if(user){
        res.json(user);
    }
    else{
        res.status(404).json({message: 'User not found.'});
    }
});

app.post('/post', (req, res) => {
    
});

app.delete('/delete/:id', (req, res) => {

});

/*app.get('/user/:id', (req, res) => {
    res.send(userData);
})*/

/*app.post('/user/add', (req, res) => {
    const { name } = req.body 

    const newUser = {
        id: userData.length + 1, 
        name 
    }

    userData.push(newUser) 
    return res.json(userData);
})*/

app.listen(PORT, ()=> {
    console.log(`App is listening on poert ${PORT}`);
})