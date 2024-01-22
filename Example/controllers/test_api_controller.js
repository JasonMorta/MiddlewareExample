//test API
const test_api_ctrl = (req, res) => {
        // Log headers
        console.log('Headers:', req.headers);

        // Log body data
        if (req.method === 'POST' || req.method === 'PUT') {
            console.log('Body:', req.body);
        }


        
    //res.send(req.body);
}


module.exports = {
    test_api_ctrl,
};