module.exports = class extends think.Model {
  async getList() {
    const list = [
      {
        user_name: '章三',
        posted_title: '第一篇帖子',
        created_time: 1550851199000
      },
      {
        user_name: '李四',
        posted_title: '二篇帖子',
        created_time: 1550851199333
      }
    ];
    return list;
  }
};
