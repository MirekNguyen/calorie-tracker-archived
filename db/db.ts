import { drizzle } from "drizzle-orm/mysql2";
import mysql from "mysql2/promise";

const connection = await mysql.createConnection({
  host: "127.0.0.1",
  user: "root",
  database: "calorie_tracker",
  password: "password",
  port: 13306,
});
const db = drizzle(connection);

export default db;
