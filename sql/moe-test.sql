/*
Navicat MySQL Data Transfer

Source Server         : localhost
Source Server Version : 50711
Source Host           : localhost:3306
Source Database       : moe-test

Target Server Type    : MYSQL
Target Server Version : 50711
File Encoding         : 65001

Date: 2018-03-20 13:41:15
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for moe_user
-- ----------------------------
DROP TABLE IF EXISTS `moe_user`;
CREATE TABLE `moe_user` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `username` varchar(32) DEFAULT NULL,
  `name` varchar(32) DEFAULT '',
  `password` varchar(128) DEFAULT NULL,
  `vip` tinyint(1) unsigned DEFAULT '0',
  `create_time` int(10) unsigned DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=22 DEFAULT CHARSET=utf8mb4;

-- ----------------------------
-- Records of moe_user
-- ----------------------------
INSERT INTO `moe_user` VALUES ('2', null, '测试用户1521523537', '123456', '0', '0');
INSERT INTO `moe_user` VALUES ('3', null, '测试用户1521523538', '123456', '0', '0');
INSERT INTO `moe_user` VALUES ('4', null, '测试用户1521523538', '123456', '0', '0');
INSERT INTO `moe_user` VALUES ('5', null, '测试用户1521523538', '123456', '0', '0');
INSERT INTO `moe_user` VALUES ('6', null, '测试用户1521523539', '123456', '0', '0');
INSERT INTO `moe_user` VALUES ('7', null, '测试用户1521523550', '123456', '0', '0');
INSERT INTO `moe_user` VALUES ('8', null, '测试用户1521523756', '123456', '0', '0');
INSERT INTO `moe_user` VALUES ('9', null, '测试用户1521523785', '123456', '0', '0');
INSERT INTO `moe_user` VALUES ('10', null, '测试用户1521523788', '123456', '0', '0');
INSERT INTO `moe_user` VALUES ('11', null, '测试用户1521523812', '123456', '0', '0');
INSERT INTO `moe_user` VALUES ('12', null, '测试用户1521523820', '123456', '0', '0');
INSERT INTO `moe_user` VALUES ('13', null, '测试用户1521523820', '123456', '0', '0');
INSERT INTO `moe_user` VALUES ('14', null, '测试用户1521523829', '123456', '0', '0');
INSERT INTO `moe_user` VALUES ('15', null, '测试用户1521523830', '123456', '1', '0');
INSERT INTO `moe_user` VALUES ('16', null, '测试用户1521523844', '123456', '1', '0');
INSERT INTO `moe_user` VALUES ('17', null, '测试用户1521524078', '123456', '1', '0');
INSERT INTO `moe_user` VALUES ('18', null, '测试用户1521524111', '123456', '1', '0');
INSERT INTO `moe_user` VALUES ('19', null, '测试用户1521524112', '123456', '1', '0');
INSERT INTO `moe_user` VALUES ('20', null, '测试用户1521524145', '123456', '1', '0');
INSERT INTO `moe_user` VALUES ('21', null, '测试用户1521524192', '123456', '1', '0');

-- ----------------------------
-- Table structure for moe_user_son
-- ----------------------------
DROP TABLE IF EXISTS `moe_user_son`;
CREATE TABLE `moe_user_son` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `userid` int(10) unsigned DEFAULT '0',
  `name` varchar(32) DEFAULT '',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4;

-- ----------------------------
-- Records of moe_user_son
-- ----------------------------
INSERT INTO `moe_user_son` VALUES ('1', '1', 'my son');
INSERT INTO `moe_user_son` VALUES ('2', '2', 'my son');
INSERT INTO `moe_user_son` VALUES ('3', '3', 'my son');
INSERT INTO `moe_user_son` VALUES ('4', '4', 'my son');
INSERT INTO `moe_user_son` VALUES ('5', '5', 'my son');
INSERT INTO `moe_user_son` VALUES ('6', '6', 'my test son');
INSERT INTO `moe_user_son` VALUES ('7', '7', 'my test son');
INSERT INTO `moe_user_son` VALUES ('8', '8', 'my test son');
INSERT INTO `moe_user_son` VALUES ('9', '9', 'my test son');
INSERT INTO `moe_user_son` VALUES ('10', '10', 'my test son');
