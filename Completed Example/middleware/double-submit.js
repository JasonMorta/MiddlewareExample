


//generate a random CSRF (Cross-Site Request Forgery) token

/* *
*
* crypto.randomBytes(16).toString('hex'): This line generates 16 random bytes and converts them to a hexadecimal string.
* The token is set as an HttpOnly cookie and also included as a hidden field in the HTML form. When the form is submitted, 
* the server checks if the CSRF token in the form matches the one in the cookie to ensure the request is legitimate.
*/

// Middleware to generate and set the double-submit cookie
function generateRandomToken(req, res, next) {

    // Generate a random CSRF token
    const csrfToken = crypto.randomBytes(16).toString('hex');
  
    // Set the cookie with the CSRF token
    res.cookie('csrfToken', csrfToken, { httpOnly: true, secure: false, sameSite: 'strict' });
    
    // Attach the CSRF token to the request object for later verification
    req.csrfToken = csrfToken;
    
    next();
}