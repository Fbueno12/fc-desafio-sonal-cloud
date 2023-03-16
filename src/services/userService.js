class userService {
    async getUser() {
        return {
            id: 1,
            name: 'user',
        }
    }
}
module.exports = new userService()