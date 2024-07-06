CREATE TABLE IF NOT EXISTS "meals" (
	"id" serial PRIMARY KEY NOT NULL,
	"name" varchar(256),
	"calories" integer
);
