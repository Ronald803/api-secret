/* eslint-env node */
const express   = require('express');
const router    = require('./router');
const config  = require('./config');

const createApp = ()=>{
    const app = express();
    app.use(express.json());
    router(app);
    return app; 
}

const app = createApp();
app.listen(config.port,()=>{
    console.log(`Listening on port ${config.port}`);
})
module.exports = createApp;


