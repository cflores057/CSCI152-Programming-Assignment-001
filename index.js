const express = require('express');
const app = express();
//had as const instead of let, prevented the delete function from working 
let users = require('./data');

app.use(express.json());

//just to test out postman, making sure the connection was correct
app.get('/', (req, res) => {
    res.send('Hello World');
});

//get function to display all users from the data.js file
app.get('/users', (req, res) => {
    res.send(users);
    console.log('Users displayed, 1 - 30');
});

//post function to create new user, set with an id that generates right after the current length of the current array of users
app.post('/users', (req, res) => {
    const user = {
        id: JSON.stringify(users.length + 1)
    };
    users.push(user);
    res.send(user);
    console.log(user);
});

//put function inputs the information into the new generated user id
app.put('/users/:id', (req, res) => {
    const id = req.params.id;
    const uIndex = users.findIndex((user) => user.id === id);
  
    if (uIndex === -1) {
      res.status(404).send('User not found');
      console.log('User not found under id" ' + id);
      return;
    }
  
    const updateU = { ...users[uIndex], ...req.body };
    users[uIndex] = updateU;
  
    res.send(updateU);
    console.log('User with id: ' + id  + ' updated!');
  });

//get function that displays a user based on the id that is added to the url
app.get('/users/:id', (req, res) => {
    const id = req.params.id; 

    for(let user of users){
        if(user.id === id){
            res.json(user); 
            console.log(user);
            console.log('Displaying user id: ' + id);
            return;
        }
    }
    res.status(404).send('User not found');
    console.log('User under id: ' + id + ' not found.')
});

//delete function that deletes a user, based on the id that is input into the url
app.delete('/users/:id', (req, res) => {
    const id = req.params.id; 
    users = users.filter((user) => {
        if(user.id !== id){
            return true;
        }
        return false;
    }); 
    res.send("User is deleted!");
    console.log("Deleted user id: " + id + "!")
}); 

app.listen(4000, () => console.log('Listening on port 4000!'));