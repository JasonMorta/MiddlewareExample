const {testAPI} = require('../controllers/testAPIController');

const testAPIRoute = (app) => {
  app.post('/testAPI/1.1/charts', testAPI);
};


module.exports = testAPIRoute;