module.exports = class extends think.Model {
  async getList() {
    const List = await this.model('list').select();
    return List;
  }
};
