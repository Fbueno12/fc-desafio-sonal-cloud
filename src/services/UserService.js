class UserService {
    async getUser() {
        return {
            id: 1,
            name: 'user',
        }
    }
}
module.exports = new UserService()