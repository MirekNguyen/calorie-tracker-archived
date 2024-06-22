CREATE TABLE `meal_entry` (
	`id` int AUTO_INCREMENT NOT NULL,
	CONSTRAINT `meal_entry_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
CREATE TABLE `ingredient` (
	`id` int AUTO_INCREMENT NOT NULL,
	`name` varchar(255) NOT NULL,
	`calories` int NOT NULL,
	CONSTRAINT `ingredient_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
CREATE TABLE `user` (
	`id` int AUTO_INCREMENT NOT NULL,
	`name` varchar(255) NOT NULL,
	`calorie_intake` int NOT NULL,
	CONSTRAINT `user_id` PRIMARY KEY(`id`)
);
