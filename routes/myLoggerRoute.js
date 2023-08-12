
//myLoggerRoute.js 
// Step 3: Import the middleware functions and controller functions
// You must destructured the imported functions using {}.
const { loggerMiddleware } = require('../middleware/myLogger');
const { loggerController } = require('../controllers/loggerController');

//Step 2:  Define route function
const myLoggerRoute = (app) => {
  // 'app' parameter is the express app object.

  /* 
  When a GET request is made to the '/', 
  the 'loggerMiddleware' middleware function will be executed first, 
  followed by the 'loggerController' controller function.
  NOTE: The middleware MUST to be placed before the controller function.

  More middleware functions and controller functions can be added to the route, 
  but they must be placed in the correct order.
  For example: app.get('/', middleware1, middleware2, controller1, ect...)
  */

  
  app.get('/', loggerMiddleware, loggerController);
};

//export the myLoggerRoute function to be used in App.js
module.exports = myLoggerRoute;