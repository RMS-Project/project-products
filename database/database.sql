CREATE DATABASE PRODUCTS_DATABASE;
## DROP DATABASE PRODUCTS_DATABASE;

SHOW DATABASES;

USE `PRODUCTS_DATABASE`;

## DROP TABLE PRODUCTS_DATABASE.manufacturer;
CREATE TABLE `PRODUCTS_DATABASE`.`manufacturer` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(50) NOT NULL,
  `createdAt`DATE NOT NULL,
  `updatedAt` DATE NOT NULL,
  PRIMARY KEY (`id`)
);

## DROP TABLE PRODUCTS_DATABASE.category;
CREATE TABLE `PRODUCTS_DATABASE`.`category` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NOT NULL,
  `createdAt`DATE NOT NULL,
  `updatedAt` DATE NOT NULL,
  PRIMARY KEY (`id`)
);

## DROP TABLE PRODUCTS_DATABASE.product;
CREATE TABLE `PRODUCTS_DATABASE`.`product` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(50) NOT NULL,
  `price` float NOT NULL,
  `quantity` INT NOT NULL,
  `manufacturer_id` INT NOT NULL,
  `createdAt`DATE NOT NULL,
  `updatedAt` DATE NOT NULL,
  PRIMARY KEY (`id`),
  FOREIGN KEY (manufacturer_id) REFERENCES manufacturer(id)
);

## DROP TABLE PRODUCTS_DATABASE.product_category;
CREATE TABLE `PRODUCTS_DATABASE`.`product_category` (
  `product_id` INT NOT NULL ,
  `category_id` INT NOT NULL ,
  `createdAt`DATE NOT NULL,
  `updatedAt` DATE NOT NULL,
  FOREIGN KEY (product_id) REFERENCES product(id),
  FOREIGN KEY (category_id) REFERENCES category(id)
);

select * from PRODUCTS_DATABASE.product;
