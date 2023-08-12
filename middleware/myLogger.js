/* myLogger.js is a middleware function that will log a string 
to the console when a GET request is made to the '/' route. */
const loggerMiddleware = function (req, res, next) {
    console.log('req', req.query) // output: { firstName: 'John', LastName: 'Doe' }
    console.log('MIDDLEWARE LOGGED')

    //Calls the next function
    next()
}

//export middleware functions to be used in myLoggerRoute.js
module.exports = {
    loggerMiddleware,
    //another middleware here
};