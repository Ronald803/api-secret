/* eslint-env node */
const express           = require('express');
const router            = express.Router();
const secretController  = require('./secret.controller');

router.get('/:id',(req,res)=>{
    let answer = secretController.getSpecificSecret(req.params.id)
    if(answer == false){
        return res.status(404).send({"message":"the message does not exist"})
    } 
    return res.status(200).send(answer);    
})

router.post('/',(req,res)=>{
    const {message} = req.body
    const secretUrl = secretController.addNewSecret(message)
    return res.status(201).send(secretUrl)
})

module.exports = router;