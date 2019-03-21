
CREATE TABLE `user` (
`id` BIGINT
(11) NOT NULL AUTO_INCREMENT COMMENT '自增ID',
`name` varchar
(100) NOT NULL  DEFAULT '' COMMENT '用户名',
`password` varchar
(20)  NOT NULL DEFAULT '' COMMENT '密码',
 PRIMARY KEY (`id`)
);

CREATE TABLE `list`
(
`id` bigint
(11) NOT NULL AUTO_INCREMENT COMMENT '自增ID',
`user_id` bigint
(11) NOT NULL DEFAULT 1  COMMENT '登录人id',
`name` varchar
(64) NOT NULL DEFAULT ''  COMMENT '发表人',
`title` varchar
(64) NOT NULL DEFAULT ''  COMMENT '文章名称',
`content` varchar
(10000) NOT NULL DEFAULT ''  COMMENT '文章内容',
`create_time` bigint COMMENT '创建时间',
PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COMMENT='文章表';

insert into `list`
( `title`,
`user_id`, `name`, `content`, `create_time`) values
( '学习技能', 1, 'root', '好了。到这里我们就实现的使用账号密码登录的功能。这里没有采用md5对密码加密，如果需要只要直接md5(password)就好了。\n下章接着对 登录后如何注销  ，其他页面的控制器要如何判断是否登录   进行纪录', '1450851199000');

insert into `list`
( `title`,
`user_id`, `name`, `content`, `create_time`) values
( '随笔谈一下', 2, '章三', '好了。到这里我们就实现的使用账号密码登录的功能。这里没有', '1500851199000');