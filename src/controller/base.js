const jwt = require('jsonwebtoken');
module.exports = class extends think.Controller {
    async __before() {
        if (this.ctx.url === '/') {
            return true;
        }
        const jwtKey = this.config('jwtKey', undefined, this.ctx.module);
        const token = this.cookie('user');
        if (!token) {
            this.ctx.state.user = '';
            return this.json({ status: 'failure', message: '校验失败' });
        }

        const userData = jwt.verify(token, jwtKey);
        think.logger.info('当前用户', userData);
        if (!userData) {
            this.ctx.state.user = '';
            return this.json({ status: 'failure', message: '校验失败' });
        }
        // await this.cache('user', userData);
        this.ctx.state.user = userData;
        think.logger.info('校验成功');
    }
};
