module.exports = (app) => {

    app.get('/', function(req, res){
        res.json({ message: "Hello world!"})
    });

    app.use('/api/test', require('./routes/test.routes'))
}