class SecretClass {
    constructor(secretText,id){
        this.id = id;
        this.secretText = secretText;
        this.read = false;
    }
}

module.exports = SecretClass;