const UserService = require('./UserService')

describe('UserService test suite', () => {
    it('should return a mock user', async() => {
        const res = await UserService.getUser()
        expect(res.id).toEqual(1)
        expect(res.name).toEqual('user')
    })
})