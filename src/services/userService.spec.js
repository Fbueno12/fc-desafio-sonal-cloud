const userService = require('./userService')

describe('userService test suite', () => {
    it('should return a mock user', async() => {
        const res = await userService.getUser()
        expect(res.id).toEqual(1)
        expect(res.name).toEqual('user')
    })
})