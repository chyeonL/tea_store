/*
 Navicat Premium Data Transfer

 Source Server         : mysql
 Source Server Type    : MySQL
 Source Server Version : 80030
 Source Host           : localhost:3306
 Source Schema         : tea_store

 Target Server Type    : MySQL
 Target Server Version : 80030
 File Encoding         : 65001

 Date: 01/10/2022 22:07:30
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for address
-- ----------------------------
DROP TABLE IF EXISTS `address`;
CREATE TABLE `address`  (
  `id` int NOT NULL AUTO_INCREMENT,
  `isDefault` varchar(255) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NULL DEFAULT NULL,
  `uId` int NULL DEFAULT NULL,
  `name` varchar(255) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NULL DEFAULT NULL,
  `tel` varchar(255) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NULL DEFAULT NULL,
  `province` varchar(255) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NULL DEFAULT NULL,
  `city` varchar(255) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NULL DEFAULT NULL,
  `county` varchar(255) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NULL DEFAULT NULL,
  `addressDetail` varchar(255) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NULL DEFAULT NULL,
  `areaCode` varchar(255) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 37 CHARACTER SET = utf8mb3 COLLATE = utf8mb3_general_ci ROW_FORMAT = DYNAMIC;

-- ----------------------------
-- Records of address
-- ----------------------------
INSERT INTO `address` VALUES (17, 'false', 102, '超妍好心烦', '13763334852', '北京市', '东城区', '', '五道口 清华大学', '110100');
INSERT INTO `address` VALUES (18, '0', 102, '田柾国', '13763334852', '广东省', '佛山市', '南海区', '南海万科广场', '130202');
INSERT INTO `address` VALUES (30, 'false', 103, '哇哈哈', '13422222222', '天津市', '天津市', '', 'q', '120100');
INSERT INTO `address` VALUES (32, '0', 103, '田柾国', '13763334852', '北京市', '东城区', '', 'abc', '110100');
INSERT INTO `address` VALUES (33, 'true', 106, 'lyh', '13422198198', '广东省', '广州市', '天河区', '本自具足', '130102');
INSERT INTO `address` VALUES (34, '0', 106, '哈哈哈', '13422198192', '天津市', '天津市', '', '停停停一样', '120100');

-- ----------------------------
-- Table structure for goods_cart
-- ----------------------------
DROP TABLE IF EXISTS `goods_cart`;
CREATE TABLE `goods_cart`  (
  `id` int NOT NULL AUTO_INCREMENT,
  `uid` int NULL DEFAULT NULL,
  `goods_id` int NULL DEFAULT NULL,
  `goods_name` varchar(255) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NULL DEFAULT NULL,
  `goods_price` decimal(10, 2) NULL DEFAULT NULL,
  `goods_num` int NULL DEFAULT NULL,
  `goods_imgUrl` varchar(255) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 1285 CHARACTER SET = utf8mb3 COLLATE = utf8mb3_general_ci ROW_FORMAT = DYNAMIC;

-- ----------------------------
-- Records of goods_cart
-- ----------------------------
INSERT INTO `goods_cart` VALUES (1258, 103, 1, '赛事茶-第三届武夷茶', 238.00, 2, '/images/goods1.jpg');
INSERT INTO `goods_cart` VALUES (1276, 102, 2, '茶具-中式陶瓷茶叶', 26.00, 1, '/images/goods2.jpg');
INSERT INTO `goods_cart` VALUES (1280, 106, 7, '清新茉莉花茶 茶具', 79.00, 1, '/images/goods4.jpg');
INSERT INTO `goods_cart` VALUES (1287, 106, 1, '赛事茶-第三届武夷茶', 238.00, 1, '/images/goods1.jpg');
INSERT INTO `goods_cart` VALUES (1288, 106, 2, '茶具-中式陶瓷茶叶', 26.00, 1, '/images/goods2.jpg');

-- ----------------------------
-- Table structure for goods_list
-- ----------------------------
DROP TABLE IF EXISTS `goods_list`;
CREATE TABLE `goods_list`  (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NULL DEFAULT NULL,
  `content` varchar(255) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NULL DEFAULT NULL,
  `price` float(255, 0) NULL DEFAULT NULL,
  `num` int NULL DEFAULT NULL,
  `imgUrl` varchar(255) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NULL DEFAULT NULL,
  `allq` varchar(255) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NULL DEFAULT NULL,
  `swiper1` varchar(255) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NULL DEFAULT NULL,
  `swiper2` varchar(255) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NULL DEFAULT NULL,
  `swiper3` varchar(255) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NULL DEFAULT NULL,
  `swiper4` varchar(255) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NULL DEFAULT NULL,
  `oldPrice` float(10, 0) NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 12 CHARACTER SET = utf8mb3 COLLATE = utf8mb3_general_ci ROW_FORMAT = DYNAMIC;

-- ----------------------------
-- Records of goods_list
-- ----------------------------
INSERT INTO `goods_list` VALUES (1, '赛事茶-第三届武夷茶', '一杯好茶放心好物', 238, 34, '/images/goods1.jpg', NULL, '/images/goods2.jpg', '/images/goods4.jpg', '/images/goods1.jpg', '/images/goods4.jpg', 3030);
INSERT INTO `goods_list` VALUES (2, '茶具-中式陶瓷茶叶', '鲜爽甘醇 口粮首选', 26, 45, '/images/goods2.jpg', NULL, '/images/goods3.jpg', '/images/goods4.jpg', '/images/goods4.jpg', '/images/goods1.jpg', 96);
INSERT INTO `goods_list` VALUES (3, '绿茶-远数龙井3号', '一杯好茶放心好物', 118, 112, '/images/goods3.jpg', NULL, '/images/goods3.jpg', '/images/goods2.jpg', '/images/goods1.jpg', '/images/goods3.jpg', 555);
INSERT INTO `goods_list` VALUES (4, '明前春茶 绿茶龙井', '一杯好茶放心好物', 98, 8, '/images/goods4.jpg', NULL, '/images/goods3.jpg', '/images/goods1.jpg', '/images/goods1.jpg', '/images/goods4.jpg', 3030);
INSERT INTO `goods_list` VALUES (5, '英式红茶 上等茶叶', '一杯好茶放心好物', 43, 977, '/images/goods2.jpg', NULL, '/images/goods2.jpg', '/images/goods2.jpg', '/images/goods4.jpg', '/images/goods3.jpg', 3030);
INSERT INTO `goods_list` VALUES (6, '神奇的糊涂魔药 茶叶 茶具 红茶', '一杯好茶放心好物', 91, 4444, '/images/goods1.jpg', NULL, '/images/goods4.jpg', '/images/goods3.jpg', '/images/goods3.jpg', '/images/goods4.jpg', 3030);
INSERT INTO `goods_list` VALUES (7, '清新茉莉花茶 茶具', '一杯好茶放心好物', 79, 23, '/images/goods4.jpg', NULL, '/images/goods2.jpg', '/images/goods3.jpg', '/images/goods3.jpg', '/images/goods1.jpg', 425);
INSERT INTO `goods_list` VALUES (8, '景德镇瓷器茶具 茶叶', '一杯好茶放心好物', 555, 4311, '/images/goods4.jpg', NULL, '/images/goods4.jpg', '/images/goods4.jpg', '/images/goods3.jpg', '/images/goods2.jpg', 5232);
INSERT INTO `goods_list` VALUES (9, '超妍 茶艺大师 茶具', '一杯好茶放心好物', 231, 77, '/images/goods3.jpg', NULL, '/images/goods4.jpg', '/images/goods1.jpg', '/images/goods3.jpg', '/images/goods3.jpg', 3030);
INSERT INTO `goods_list` VALUES (10, '小罐茶大匠心 好茶', '一杯好茶放心好物', 1997, 42, '/images/goods2.jpg', NULL, '/images/goods1.jpg', '/images/goods4.jpg', '/images/goods3.jpg', '/images/goods3.jpg', 3030);
INSERT INTO `goods_list` VALUES (11, '银河修理员 好茶叶', '一杯好茶放心好物', 45, 987, '/images/goods1.jpg', NULL, '/images/goods2.jpg', '/images/goods1.jpg', '/images/goods2.jpg', '/images/goods1.jpg', 3030);

-- ----------------------------
-- Table structure for store_order
-- ----------------------------
DROP TABLE IF EXISTS `store_order`;
CREATE TABLE `store_order`  (
  `id` int NOT NULL AUTO_INCREMENT,
  `order_id` varchar(255) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NULL DEFAULT NULL,
  `goods_name` varchar(255) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NULL DEFAULT NULL,
  `goods_price` decimal(10, 2) NULL DEFAULT NULL,
  `goods_num` int NULL DEFAULT NULL,
  `order_status` varchar(255) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NULL DEFAULT NULL,
  `uId` int NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 139 CHARACTER SET = utf8mb3 COLLATE = utf8mb3_general_ci ROW_FORMAT = DYNAMIC;

-- ----------------------------
-- Records of store_order
-- ----------------------------
INSERT INTO `store_order` VALUES (138, '20220930170658857703', '明前春茶 绿茶龙井,清新茉莉花茶 茶具,绿茶-远数龙井3号', 295.00, 3, '3', 102);
INSERT INTO `store_order` VALUES (139, '20221001023621854320', '赛事茶-第三届武夷茶', 476.00, 2, '4', 102);
INSERT INTO `store_order` VALUES (158, '20221001151205851042', '绿茶-远数龙井3号', 2478.00, 21, '3', 106);
INSERT INTO `store_order` VALUES (159, '20221001151221374637', '赛事茶-第三届武夷茶,茶具-中式陶瓷茶叶', 264.00, 2, '4', 106);

-- ----------------------------
-- Table structure for user
-- ----------------------------
DROP TABLE IF EXISTS `user`;
CREATE TABLE `user`  (
  `id` int NOT NULL AUTO_INCREMENT,
  `tel` varchar(255) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NULL DEFAULT NULL,
  `pwd` varchar(255) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NULL DEFAULT NULL,
  `imgUrl` varchar(255) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NULL DEFAULT NULL,
  `nickName` varchar(255) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NULL DEFAULT NULL,
  `token` varchar(255) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 107 CHARACTER SET = utf8mb3 COLLATE = utf8mb3_general_ci ROW_FORMAT = DYNAMIC;

-- ----------------------------
-- Records of user
-- ----------------------------
INSERT INTO `user` VALUES (100, '13244444343', '1111111', '/images/user.jpeg', '13244444343', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZWwiOiIxMzI0NDQ0NDM0MyIsImlhdCI6MTY2Mzk1OTY3OH0.Fins7cb7QRMF7UHqdyJSQfxzQoXg3e7fdIXMAcLmOw4');
INSERT INTO `user` VALUES (102, '13763334852', '111111', '/images/user.jpeg', '超妍超妍', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZWwiOiIxMzc2MzMzNDg1MiIsImlhdCI6MTY2NDU3MTY5MSwiZXhwIjoxNjY0NzQ0NDkxfQ.FwLxvlfSk1q61BO6uVoC4Q_iCUpjjQVtE6pphJHvIGg');
INSERT INTO `user` VALUES (103, '13422222222', '1111111', '/images/user.jpeg', '树木真美', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZWwiOiIxMzQyMjIyMjIyMiIsImlhdCI6MTY2NDM4NzMwOH0.rAS-1EOIUprAU9tg_9lVm4_wCGG1QUJfjlrMis3TjXg');
INSERT INTO `user` VALUES (105, '13455555555', '111111', '/images/user.jpeg', '用户13455555555', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZWwiOiIxMzQ1NTU1NTU1NSIsImlhdCI6MTY2NDU2NTEyNiwiZXhwIjoxNjY0NzM3OTI2fQ.3J48VIWeRlrTRI2zpjkkKg1ATBM010fuxzqI969OyKA');
INSERT INTO `user` VALUES (106, '13422198198', '333333', '/images/user.jpeg', '用户13422198198', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZWwiOiIxMzQyMjE5ODE5OCIsImlhdCI6MTY2NDYwNjE3MiwiZXhwIjoxNjY0Nzc4OTcyfQ.NSBFdfUKJN0Kc1nUHwBwNRFhxh4j00eEJBaHpvegm_c');

SET FOREIGN_KEY_CHECKS = 1;
