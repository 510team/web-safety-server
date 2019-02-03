module.exports = class extends think.Model {
    async getList() {
        const List = await this.model('list').select();
        return List;
    }
    async getListByUserId(user_id) {
        const List = await this.model('list')
            .where({ id: user_id })
            .find();
        return List;
    }
};
