const express   = require('express');
const router    = express.Router();

router.get('/',(req,res)=>{
    res.send("peticion get a secrets")
})

router.post('/',(req,res)=>{
    res.send("peticion post a secrets")
})

module.exports = router;