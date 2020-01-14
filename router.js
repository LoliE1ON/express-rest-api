module.exports = (app) => {

    // Auth
    app.use('/api/auth', require('./routes/auth.routes'))

}