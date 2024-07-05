import * as schema from "./schema";
import { drizzle } from "drizzle-orm/node-postgres";
import { Client } from "pg";

const connection = new Client({
  host: "localhost",
  user: "root",
  database: "calorie_tracker",
  password: "password",
  port: 13306,
});
const db = drizzle(connection, { schema: schema });

export default db;
