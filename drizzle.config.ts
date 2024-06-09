import { defineConfig } from 'drizzle-kit';

export default defineConfig({
  schema: './db/schema.ts',
  out: './drizzle',
  dialect: 'mysql',
  dbCredentials: {
    host: 'localhost',
    user: 'user',
    password: 'password',
    database: 'calorie_tracker',
    port: 13306,
  }
});
