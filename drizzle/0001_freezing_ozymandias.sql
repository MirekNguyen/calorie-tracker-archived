CREATE TABLE `ingredients` (
	`id` int AUTO_INCREMENT NOT NULL,
	`name` varchar(255) NOT NULL,
	`calories` int NOT NULL,
	CONSTRAINT `ingredients_id` PRIMARY KEY(`id`)
);
