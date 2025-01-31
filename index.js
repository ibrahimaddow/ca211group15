// Express Module
const express = require('express');
// Load path module
const path = require('path');
//Calling the database connection
const db = require('./config/mongoose');
// Express Functionality
const app = express();
// Assigning the port
const port = 8000;

// Set view with EJS template
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

//Form data is URL encoded to read an attributes of the form
app.use(express.urlencoded());

//Call and using the router in the middleware
app.use('/', require('./routes'));

app.listen(port, function(err){
    if(err){
        console.log(`Error to run the server on: ${port}`);
    }
    console.log(`Server is running on: ${port}`);
})