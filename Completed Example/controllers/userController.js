
// Require the user data from simulated database
const userInformation = require('./userDB');
console.log('userInformation', userInformation)
const jwt = require('jsonwebtoken');

const jwtSecretKey = 'your-secret-key';

//! Define the login controller functions
const userController = (req, res) => {
    console.log('🚨')

    //Get the username and password from the request query(use 'req.body' if making a request from your frontend App)
    const { username, password } = req.body;
    console.log('password', password)
    console.log('username', username)

    //Find the user in the database - checking if the username and password matches
    const user = userInformation.find(user =>
        user.username === username && user.password === password
    );

    //If the user is not found, return an error message - end the request
    if (!user) {
         res.status(401).json({ success: false, message: 'Invalid credentials' });
    } else {

        // Create a JWT token payload
        payload = {
            'name': username,
            'admin': 'false'
        }
        // sign(payload, secretOrPrivateKey, [options, callback])
        console.log('making token')
        const token = jwt.sign(payload, jwtSecretKey, { 
            algorithm: 'HS256',  
            expiresIn: '1h' 
        });

        // Set HttpOnly cookie and store the token then send the response
        /* *
        * The "secure" option is a flag used when setting a cookie. When secure is set to true, 
        * the browser enforces that the cookie should only be sent over secure, encrypted connections using HTTPS.
        * If a cookie has the secure flag set, it won't be sent in requests made over plain HTTP. 
        * 
        * 
        * 
         */
        res.cookie('authToken', token, { httpOnly: true, secure: true, sameSite: 'strict' });


        res.send({ message: `Welcome back ${username}` })

    }
}

// Define the user data controller function
const getTodos = (req, res) => {

    // Get the users todos from the database
    const { name, admin } = req.payload;


    //Find the user in the database - checking if the username and password matches
    const user = userInformation.find(user => user.username === name);

    // If the user is found, return the user's todos
    if (user) {
        return res.send(user.todos);
    }

}

//export controller functions to be used on the myLoggerRoute.js/routes
module.exports = {
    userController,
    getTodos
};

