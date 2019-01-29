CREATE TABLE `article` (
`id` bigint(11) NOT NULL AUTO_INCREMENT COMMENT '自增ID',
`user_id` varchar(64) NOT NULL DEFAULT ''  COMMENT '登录人id',
`name` varchar(64) NOT NULL DEFAULT ''  COMMENT '发表人',
`title` varchar(64) NOT NULL DEFAULT ''  COMMENT '文章名称',
`content` varchar(64) NOT NULL DEFAULT ''  COMMENT '文章内容',
`create_time` timestamp COMMENT '创建时间',
PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COMMENT='文章表';