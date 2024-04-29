CREATE TABLE `displayed_facts` (
	`date` text DEFAULT (CURRENT_DATE),
	`fact_id` integer,
	FOREIGN KEY (`fact_id`) REFERENCES `facts`(`id`) ON UPDATE no action ON DELETE no action
);
--> statement-breakpoint
CREATE TABLE `facts` (
	`id` integer PRIMARY KEY NOT NULL,
	`content` text
);
