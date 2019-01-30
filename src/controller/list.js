const Base = require('./base.js');

module.exports = class extends Base {
    async indexAction(carModel) {
        const data = await this.model('list').getList();
        const result = {};
        result.status = 'success';
        result.list = data;
        return this.json(result);
    }

    async postedAction() {
        const title = this.ctx.post('title');
        const content = this.ctx.post('content');
        const user_id = 2;
        const user_info = await this.model('user')
            .where({ id: user_id })
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
                user_id: 2,
                name: user_info.name,
                title: title,
                content: content,
                create_time: parseInt(new Date().getTime())
            });
            result.status = 'success';
            result.message = '发布成功';
        }
        return this.json(result);
    }

    async deletedAction() {
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
                const affectedRows = await this.model('list')
                    .where({ id: listID })
                    .delete();
                result.status = 'success';
                result.message = '删除成功';
            }
        }
        return this.json(result);
    }
};
