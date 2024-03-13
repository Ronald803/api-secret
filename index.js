/* eslint-env node */
const express   = require('express');
const app       = express();
const router    = require('./router');
const {config}  = require('./config');


app.use(express.json());
router(app);

app.listen(config.port,()=>{
    console.log(`Listening on port ${config.port}`);
})

