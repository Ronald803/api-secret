const config = require('../config')
const secretController = require('../secret.controller');

test('checking the lenght of a key',()=>{
    let key = secretController.generateRandomKey(config)
    expect(key.length).toBe(16)
})