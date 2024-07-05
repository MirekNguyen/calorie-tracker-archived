import * as schema from "./schema";
import { drizzle } from "drizzle-orm/node-postgres";
import { Client } from "pg";

const client = new Client({
  host: "localhost",
  user: "user",
  password: "password",
  database: "calorie_tracker",
  port: 13306,
  ssl: false,
});

await client.connect();
const db = drizzle(client, { schema: schema });

export default db;
