const request = require('supertest');
const createApp = require('../index');

describe('test get', ()=>{
    let app = null;
    let server = null;
    beforeAll(()=>{
        app = createApp();
        server = app.listen(3001)
    })
    afterAll(async()=>{
        await server.close();
    })
    describe('test [GET] a nonexistent secret',()=>{
        test('should return a "the message does not exist"', async ()=>{
            return request(app)
                .get('/api/secrets/a5df545d')
                .expect(404)
                .then((response) => {
                    const answer = JSON.parse(response.text)
                    expect(answer.message).toEqual("the message does not exist");
                })
        })        
    })
    let secretKey = ""
    // describe('test [POST] a secret',()=>{
    //     const bodyData = {
    //         message: "hello everyone"
    //     }        
    //     test('should return a secret key', async ()=>{
    //         return request(app)
    //             .post('/api/secrets/')
    //             .send(bodyData)
    //             .expect(201)
    //             .then((response) => {
    //                 const answer = JSON.parse(response.text)
    //                 expect(answer.secretKey.length).toBe(16)
    //                 secretKey=answer.secretKey
    //             })
    //     })
    // })
    // describe('test [GET] a specific secret',()=>{
    //     test('test [GET] to a secret key', async ()=>{
    //         return request(app)
    //             .get(`/api/secrets/${secretKey}`)
    //             .expect(200)
    //             .then((response)=>{
    //                 const answer = JSON.parse(response.text)
    //                 expect(answer.secretMessage).toEqual("hello everyone");
    //             })
    //     })
    // })
})
