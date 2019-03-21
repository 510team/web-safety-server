const Base = require('./base.js');

module.exports = class extends Base {
    //列表
    async indexAction(carModel) {
        const userData = this.ctx.state.user;
        const userId = userData.id;
        const data = await this.model('list').getList();
        const result = {};
        if (userData.level === 100) {
            data.forEach(item => {
                item.delete = true;
            });
        } else {
            data.forEach(item => {
                if (item.user_id === userId) {
                    item.delete = true;
                } else {
                    item.delete = false;
                }
            });
        }
        think.logger.info('userData.level', userData.level);
        result.status = 'success';
        result.list = data;

        return this.json(result);
    }

    // 新增
    async postedAction() {
        const title = this.ctx.post('title');
        const content = this.ctx.post('content');

        const userData = this.ctx.state.user;
        const userId = userData.id;
        think.logger.info('id', userId);
        if (!userId) {
            return this.json({
                status: 'failure',
                message: '校验失败'
            });
        }
        const user_info = await this.model('user')
            .where({ id: userId })
            .find();
        think.logger.error('nam', user_info);
        const result = {};
        if (think.isEmpty(title)) {
            result.status = 'failure';
            result.message = '帖子标题是必须的';
        } else if (think.isEmpty(content)) {
            result.status = 'failure';
            result.message = '帖子内容是必须的';
        } else {
            const insertId = await this.model('list').add({
                user_id: userId,
                name: user_info.name,
                title: title,
                content: content,
                create_time: new Date()
            });
            result.status = 'success';
            result.message = '发布成功';
        }
        return this.json(result);
    }
    //查看
    async viewAction() {
        const listID = this.ctx.param('id');

        const result = {};

        const list = await this.model('list').getListByUserId(listID);

        result.status = 'success';
        result.data = list;
        return this.json(result);
    }
    async editAction() {
        const userData = this.ctx.state.user;
        const userId = userData.id;
        const listID = this.ctx.post('id');
        const title = this.ctx.post('title');
        const content = this.ctx.post('content');

        const result = {};
        if (think.isEmpty(listID)) {
            result.status = 'failure';
            result.message = '列表ID是必传的';
        } else {
            if (userData.level === 100) {
                await this.model('list')
                    .where({ id: listID })
                    .update({
                        title: title,
                        content: content,
                        create_time: new Date()
                    });
            } else {
                await this.model('list')
                    .where({ id: listID, user_id: userId })
                    .update({
                        title: title,
                        content: content,
                        create_time: new Date()
                    });
            }
            result.status = 'success';
            result.message = '删除成功';
        }
        return this.json(result);
    }
    //删除
    async deletedAction() {
        const userData = this.ctx.state.user;
        const userId = userData.id;

        const listID = this.ctx.post('list_id');
        const result = {};

        if (think.isEmpty(listID)) {
            result.status = 'failure';
            result.message = '列表ID是必传的';
        } else {
            const data = await this.model('list')
                .where({ id: listID })
                .find();
            if (think.isEmpty(data)) {
                result.status = 'failure';
                result.message = '列表ID不存在';
            } else {
                if (userData.level === 100) {
                    await this.model('list')
                        .where({ id: listID })
                        .delete();
                } else {
                    await this.model('list')
                        .where({ id: listID, user_id: userId })
                        .delete();
                }
                result.status = 'success';
                result.message = '删除成功';
            }
        }
        return this.json(result);
    }
};
