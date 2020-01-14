module.exports = (app) => {

    // Routes

    app.get('/', function(req, res){
        res.json({
            message: "Index end point"
        })
    });

    app.use('/api/auth', require('./routes/auth.routes'))

}