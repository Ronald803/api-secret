const SecretClass       = require('./secret.model');
const secretsDataBase   = require('./fakeDB');

function addNewSecretDB(secretText,id){
    const newSecret = new SecretClass(secretText,id);
    secretsDataBase.push(newSecret);
}

function listAllSecretsDB(){
    return secretsDataBase;
}

function getSpecificSecretDB(id){
    let index = secretsDataBase.findIndex(secret=> secret.id==id)
    console.log(index);
    console.log(secretsDataBase[index]);
    if(index!=-1){
        return {...secretsDataBase[index],index};
    } else {
        return {read:true}
    }
}

function hideSecretDB(index){
    secretsDataBase[index].read = true;
}

module.exports = {addNewSecretDB,listAllSecretsDB,getSpecificSecretDB,hideSecretDB}
