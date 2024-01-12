const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const cors = require("cors"); // allows cross-site HTTP request
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
const cookieParser = require('cookie-parser');
app.use(cookieParser());

//const corsOptions = { origin: "*" };// allow requests from all origins
// Specify the origin of your frontend application
const allowedOrigins = [
   'http://localhost:50339', // Replace with the actual origin of your frontend
   // Add more origins if needed
 ];
 
 // CORS middleware configuration
 const corsOptions = {
   origin: function (origin, callback) {
     if (!origin || allowedOrigins.includes(origin)) {
       callback(null, true);
     } else {
       callback(new Error('Not allowed by CORS'));
     }
   },
   credentials: true, // Allow credentials (cookies)
 };
 
 app.use(cors(corsOptions));



// import the myLoggerRoute
const myLoggerRoute = require('./routes/myLoggerRoute');
// import the login route
const loginRoute = require('./routes/loginRoute');

// import the userData route
const userDataRoute = require('./routes/secure/userDataRoute');


userDataRoute(app)
// Step 1: call the myLoggerRoute function and pass in the app object as an argument
// From here go to routes/myLoggerRoute.js
myLoggerRoute(app); 
loginRoute(app)
//userDataRoute(app)









//Listening on port 8080
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
   console.log(`Server is listening on port ${PORT}`);
});



//Getting started

// Step 1: Open the current directory in your terminal
// Step 2: Run the command: npm install
// Step 3: Run the command: npm start

// The server will run on port 8080 / http://localhost:8080