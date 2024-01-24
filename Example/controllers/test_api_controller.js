//test API
const test_api_ctrl = (req, res) => {
        // Log headers
        console.log('req:', req);

        // Log body data
        if (req.method === 'POST' || req.method === 'PUT') {
            console.log('Body:', req.body);
        }

        // get the payload
        


        
    res.send({"status": "ok", "id": 1091983});
}


module.exports = {
    test_api_ctrl,
};