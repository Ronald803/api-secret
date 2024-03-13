/* eslint-env node */
const secretStore   = require('./secret.store');
const {config}  = require('./config');

const addNewSecret = (secretText)=>{
    let id = generateRandomKey();
    secretStore.addNewSecretDB(secretText,id)
    return {secretKey: id}
}

const getSpecificSecret = (id)=>{
    const secret = secretStore.getSpecificSecretDB(id);
    if(secret != false){
        secretStore.hideSecretDB(id)
        return {secretMessage: secret}
    } 
    return false
}

const generateRandomKey = ()=>{
    const allCharacters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    let key = [];
    for (let i = 0; i < config.secretSize; i++) {
        let index = Math.floor(Math.random()*allCharacters.length)
        key.push(allCharacters[index])
    }
    return key.join("")
}

module.exports = {addNewSecret,getSpecificSecret}