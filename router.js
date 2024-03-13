/* eslint-env node */
const secrets = require('./secret.network');

const routes = (server)=>{
    server.use('/api/secrets',secrets)
}

module.exports = routes;