const account = require('../config/account.js'); // 账号密码
const crypto = require('crypto');
const jwt = require('jsonwebtoken');

module.exports = class extends think.Controller {
    async indexAction() {
        const jwtKey = this.config('jwtKey', undefined, this.ctx.module);

        // 登陆账号密码
        const user = this.ctx.post('user');
        const password = this.ctx.post('password');

        // 返回
        const result = {};
        const savedUser = await this.model('user').getUserByUserName(user);
        think.logger.info('savedUser', savedUser);

        if (password == savedUser['password']) {
            const payload = {
                user: user,
                level: savedUser['level'],
                id: savedUser.id
            };
            let token = jwt.sign(payload, jwtKey, {
                expiresIn: 60 * 60 * 24
            });
            think.logger.info('token', token);
            this.ctx.cookie('user', token);
            this.ctx.cookie('username', user, {
                httpOnly: false
            });
            result.status = 'success';
            result.message = '登录成功';
            result.token = token;

        } else {
            result.status = 'failure';
            result.message = '账号或者密码不正确';
        }
        return this.json(result);
    }
};
