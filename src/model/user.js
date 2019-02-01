module.exports = class extends think.Model {
    async getUserByUserName(userName) {
        return this.model('user')
            .where({ name: userName })
            .find();
    }
};
