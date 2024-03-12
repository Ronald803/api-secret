const express   = require('express');
const app       = express();
const router    = require('./router');

app.use(express.json());
router(app);

app.listen(3000,()=>{
    console.log('Escuchando en el puerto 3000');
})

