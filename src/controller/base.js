module.exports = class extends think.Controller {
  async __before() {
    // this.header('Access-Control-Allow-Origin', '*');
    // this.userInfo = await this.session('userInfo').catch(_ => ({}));
    // const isAllowedMethod = this.isMethod('GET');
    // const isAllowedResource = this.resource === 'token';
    // const isLogin = !think.isEmpty(this.userInfo);
    // if (!isAllowedMethod && !isAllowedResource && !isLogin) {
    //   return this.ctx.throw(401, '请登录后操作');
    // }
  }
};
