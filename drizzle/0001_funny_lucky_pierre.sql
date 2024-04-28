CREATE TABLE `displayed_facts` (
	`date` integer,
	`fact_id` integer,
	FOREIGN KEY (`fact_id`) REFERENCES `facts`(`id`) ON UPDATE no action ON DELETE no action
);
