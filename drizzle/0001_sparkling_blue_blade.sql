ALTER TABLE `meal_entry` ADD `meal_id` int;--> statement-breakpoint
ALTER TABLE `meal_entry` ADD `date` date NOT NULL;--> statement-breakpoint
ALTER TABLE `meal_entry` ADD CONSTRAINT `meal_entry_meal_id_ingredient_id_fk` FOREIGN KEY (`meal_id`) REFERENCES `ingredient`(`id`) ON DELETE no action ON UPDATE no action;