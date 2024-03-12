const express           = require('express');
const router            = express.Router();
const secretController  = require('./secret.controller');

router.get('/:id',(req,res)=>{
    let answer = secretController.getSpecificSecret(req.params.id)
    if(answer == false){
        res.status(404).send("El mensaje no existe")
    } else {
        res.send(answer);
    }
})

router.get('/',(req,res)=>{
    let allSecrets = secretController.getAllSecrets()
    res.send(allSecrets)
})

router.post('/',(req,res)=>{
    const {message} = req.body
    const secretUrl = secretController.addNewSecret(message)
    res.send(secretUrl)
})

module.exports = router;