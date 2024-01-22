const {testAPI} = require('../controllers/testAPIController');

const testAPIRoute = (app) => {
  app.post('/testapi/1.1/charts', testAPI);
};


module.exports = testAPIRoute;