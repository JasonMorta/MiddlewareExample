// routes/loginRoute.js
// get the userController
const { userController } = require('../controllers/userController');
const { verifyCookieAndToken } = require('../middleware/authTokencNcookie');

const loginRoute = (app) => {
    console.log('login route💡');

    app.post('/login', verifyCookieAndToken , userController);
    //This route URL will be http://localhost:8080/login
};

// export the login function to be used in "../app.js"
module.exports = loginRoute;

