const secretStore = require('./secret.store');

const addNewSecret = (secretText)=>{
    let id = generateRandomKey();
    secretStore.addNewSecretDB(secretText,id)
    return {secretKey: id}
}

const getAllSecrets = ()=>{
    const allSecrets = secretStore.listAllSecretsDB();
    return allSecrets
}

const getSpecificSecret = (id)=>{
    const secret = secretStore.getSpecificSecretDB(id);
    if(secret.read == false){
        secretStore.hideSecretDB(secret.index)
        return {secretMessage: secret.secretText}
    } else {
        return false
    }
}

const generateRandomKey = ()=>{
    const allCharacters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    const longitud = 10;
    let key = [];
    for (let i = 0; i < 10; i++) {
        let index = Math.floor(Math.random()*allCharacters.length)
        key.push(allCharacters[index])
    }
    return key.join("")
}

module.exports = {addNewSecret,getAllSecrets,getSpecificSecret}