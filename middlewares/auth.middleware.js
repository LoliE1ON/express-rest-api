module.exports = (req, res, next) => {

    console.log('Auth middleware');

    req.requestTime = Date.now()
    next();

}