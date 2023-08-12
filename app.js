const express = require('express');
const app = express();

// import the myLoggerRoute
const myLoggerRoute = require('./routes/myLoggerRoute.js');

// Step 1: call the myLoggerRoute function and pass in the app object
myLoggerRoute(app); 

//Listening on port 8080
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
   console.log(`Server is listening on port ${PORT}`);
});

// Got to http://localhost:8080/ and you should see the message in the console