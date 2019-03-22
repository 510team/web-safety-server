const jwt = require('jsonwebtoken');

module.exports = class extends think.Controller {
    async __before() {

        if (this.ctx.url === '/') {
            return true;
        }

        //检查referer
        const refererMatch = this.header('referer') && this.header('referer').match(/http:\/\/(.+?)\//) || null
        const refererName = refererMatch && refererMatch[1] || ''

        if (refererName !== '' && refererName !== this.config('hostname')) {
            return this.json({
                status: 'failure',
                message: '来自有风险网站的请求，不允许~~'
            });
        }

        //检查header
        const headerToken = this.header('token')

        if (!headerToken) {
            this.ctx.state.user = '';
            return this.json({
                status: 'failure',
                message: 'token无效,请重新登陆',
                code: '401'
            });
        }


        const jwtKey = this.config('jwtKey', undefined, this.ctx.module);
        // const token = this.cookie('user');

        if (!headerToken) {
            this.ctx.state.user = '';
            return this.json({
                status: 'failure',
                message: 'token无效,请重新登陆'
            });
        }

        jwt.verify(headerToken, jwtKey, (err, userData) => {
            if (err) {
                this.ctx.state.user = '';
                return this.json({
                    status: 'failure',
                    message: 'token无效,请重新登陆'
                });
            } else {
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
        })


    }
};
