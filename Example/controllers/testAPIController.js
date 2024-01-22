//test API
const testAPI = (req, res) => {
    console.log('req', req.headers)
    //res.send(req.body);
}


module.exports = {
    testAPI,
};