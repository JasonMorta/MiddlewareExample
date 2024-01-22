const {test_api_ctrl} = require('../controllers/test_api_controller');

const test_api_route = (app) => {
  app.post('/testapi/1.1/charts', test_api_ctrl);
};


module.exports = test_api_route;