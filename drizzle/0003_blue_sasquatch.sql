CREATE TABLE IF NOT EXISTS "meal_entries" (
	"id" serial PRIMARY KEY NOT NULL,
	"date" date,
	"meal_id" integer NOT NULL
);
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "meal_entries" ADD CONSTRAINT "meal_entries_meal_id_meals_id_fk" FOREIGN KEY ("meal_id") REFERENCES "public"."meals"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
