/* eslint-env node */
let secretsMap   = require('./fakeDB');

function addNewSecretDB(secretText,id){
    secretsMap.set(id,secretText);
}

function getSpecificSecretDB(id){
    let existSecret = secretsMap.has(id)
    if(existSecret == true){
        return secretsMap.get(id);
    } 
    return false
}

function hideSecretDB(id){
    secretsMap.delete(id)
}

module.exports = {addNewSecretDB,getSpecificSecretDB,hideSecretDB}
