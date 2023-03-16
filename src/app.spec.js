const request = require('supertest')
const app = require('./server')

describe('Integration test suite', () => {
    it('should get main route', async () => {
        const res = await request(app).get('/')
        expect(res.statusCode).toEqual(200)
        expect(res.body).toHaveProperty('message')
    })
    it('should get a mock user', async () => {
        const res = await request(app).get('/users')
        expect(res.statusCode).toEqual(200)
        expect(res.body).toHaveProperty('id')
        expect(res.body).toHaveProperty('name')
    })
})