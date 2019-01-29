const Base = require('./base.js');

module.exports = class extends Base {
  async indexAction(carModel) {
    const data = await this.model('list').getList();
    const result = {};
    result.status = 'success';
    result.list = data;
    return this.json(result);
  }
};
