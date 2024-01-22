const express = require('express');
const app = express();
const cors = require("cors"); // allows cross-site HTTP request
const bodyParser = require('body-parser');// allows JSON transfers between client and server.
app.use(bodyParser.urlencoded({ extended: false }))// parse application/x-www-form-urlencoded. Extended means that the object can contain nested objects.
app.use(bodyParser.json())
const corsOptions = { origin: "*" };
app.use(cors(corsOptions));

// import the myLoggerRoute
const myLoggerRoute = require('./routes/myLoggerRoute');
const testAPIRoute = require('./routes/testApi');

// Step 1: call the myLoggerRoute function and pass in the app object as an argument

myLoggerRoute(app); 
testAPIRoute(app);
// ==> From here go to routes/myLoggerRoute.js


//Listening on port 8080
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
   console.log(`Server is listening on port ${PORT}`);
});

// The server will run on port 8080 / http://localhost:8080


/* 
** Getting started: Installation
** Step 1: Open the current directory in your terminal
** Step 2: Run the command: npm install
** Step 3: Run the command: npm start
*/