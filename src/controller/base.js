const jwt = require('jsonwebtoken');

module.exports = class extends think.Controller {
    async __before() {
        // if (this.header('referer') !== this.config('host')) {
        //     return false;
        // }

        // if(this.header('token') !== ''){

        // }

        if (this.ctx.url === '/') {
            return true;
        }

        const jwtKey = this.config('jwtKey', undefined, this.ctx.module);
        const token = this.cookie('user');
        if (!token) {
            this.ctx.state.user = '';
            return this.json({
                status: 'failure',
                message: '用户校验失败,请重新登陆'
            });
        }

        const userData = jwt.verify(token, jwtKey);
        think.logger.info('当前用户', userData);
        if (!userData) {
            this.ctx.state.user = '';
            return this.json({
                status: 'failure',
                message: '用户校验失败,请重新登陆'
            });
        }

        this.ctx.state.user = userData;
        think.logger.info('用户校验成功');
    }
};
