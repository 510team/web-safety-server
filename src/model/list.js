module.exports = class extends think.Model {
    async getList() {
        const List = await this.model('list').select();
        return List;
    }
    async getListByUserId(id) {
        const List = await this.model('list')
            .where({ id: id })
            .find();
        return List;
    }
};
