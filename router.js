module.exports = (app) => {

    // Auth
    app.use('/api/auth', require('./routes/auth.routes'))

    // Unknown endpoint
    app.use((req, res) => {
        return res.status(501).send({
            error: 'The endpoint you\'re looking for is not implemented by our system.',
            status_code: 501
        });
    });

}