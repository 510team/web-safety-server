const Base = require('./base.js');
module.exports = class extends Base {
    async indexAction() {
        const userData = this.ctx.state.user;
        const result = {};
        result.status = 'success';
        result.data = userData;
        return this.json(result);
    }
};
