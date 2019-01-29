const account = require('../config/account.js'); // 账号密码
const crypto = require('crypto');

function aesEncrypt(data, key) {
  const cipher = crypto.createCipher('aes192', key);
  var crypted = cipher.update(data, 'utf8', 'hex');
  crypted += cipher.final('hex');
  return crypted;
}

module.exports = class extends think.Controller {
  async indexAction() {
    const jwtKey = this.config('jwtKey', undefined, this.ctx.module);
    // 登陆账号密码
    const user = this.ctx.post('user');
    const password = this.ctx.post('password');
    // 返回
    const result = {};
    if (password === account[user]) {
      const token = aesEncrypt(
        JSON.stringify({
          user: user,
          date: new Date().getTime() / 1000
        }),
        jwtKey
      );
      this.ctx.cookie('user', token);
      this.ctx.cookie('username', user, {
        httpOnly: false
      });
      result.status = 'success';
      result.message = '登录成功';
    } else {
      result.status = 'failure';
      result.message = '登录失败';
    }
    return this.json(result);
  }
};
