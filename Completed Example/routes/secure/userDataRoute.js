// routes/loginRoute.js
// get the userController
const { getTodos } = require('../../controllers/userController');

//Import our JWT middleware
const { jwtMiddleware } = require('../../middleware/jwtMiddleware.js');

const userDataRoute = (app) => {

    app.get('/login/data',jwtMiddleware, getTodos);
    //This route URL will be http://localhost:8080/login/data
};

// export the login function to be used in "../app.js"
module.exports = userDataRoute;

