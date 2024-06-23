import { drizzle } from "drizzle-orm/mysql2";
import mysql from "mysql2/promise";
import * as schema from "./schema";

const connection = await mysql.createConnection({
  host: "localhost",
  user: "root",
  database: "calorie_tracker",
  password: "password",
  port: 13306,
});
const db = drizzle(connection, {schema: schema, mode: "default"});

export default db;
