import { request } from 'node:http'
import { it } from 'node:test'
import app from './app'

describe("Books", () => {
    it('should return a array of books', async () => {
        const resp = await request(app).get('/').send()
        console.log(resp)
    })
})