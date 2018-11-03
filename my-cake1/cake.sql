SET NAMES UTF8;
DROP DATABASE IF EXISTS cake;
CREATE DATABASE  cake CHARSET=UTF8;
USE  cake;
CREATE TABLE users
(
	id INT PRIMARY KEY AUTO_INCREMENT,
	name VARCHAR(20),
	uname VARCHAR(20),
	upwd  VARCHAR(10),
);

INSERT INTO users
VALUES
(NULL,'丁丁',"dingding","123456"),
(NULL,'当当',"dangdang","123456"),
(NULL,'豆豆',"豆豆","123456");



	   
	   





