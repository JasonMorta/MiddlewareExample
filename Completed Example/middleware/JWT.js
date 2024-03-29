// middleware/jwtMiddleware.js
const jwt = require('jsonwebtoken');
const cookieParser = require('cookie-parser');

// Define a secured middleware function
function jwtMiddleware(req, res, next) {
    console.log('jwtMiddleware')
  // Get the token from the request headers
    const jwtToken = req.headers['authorization'] 

    //Split the token from the Bearer
    const tokenExtract = jwtToken.split(' ')[1] 

  try {
    // Verify the token using the secret key
    const payload = jwt.verify(tokenExtract, 'HyperionDev'); //verify token secret-key

     // Attach the payload to the request object
     req.payload = payload;
 
    // Proceed to the protected route
    next();
  } catch (error) {
    // If token verification fails, return a forbidden response
    res.status(403).json({ message: 'Invalid token' });
  }
}

// Export the middleware to be used in userDataRoute.js
module.exports = {
    jwtMiddleware
};
