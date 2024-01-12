



function verifyCookieAndToken(req, res, next) {

    const authToken = req.cookies?.authToken;
    console.log('reqCookie',  authToken)


next();

}

module.exports = {
    verifyCookieAndToken
}