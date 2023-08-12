
//Define the controller functions
const loggerController = (req, res) => {
  //The res.send() function sends a string to the client
  console.log('CONTROLLER LOGGED')
  res.send('Server response from loggerController')
}


//export controller functions to be used on the myLoggerRoute.js/routes
module.exports = {
  loggerController,
  //another function here
};