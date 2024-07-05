import { defineConfig } from 'drizzle-kit';

export default defineConfig({
  schema: './db/schema.ts',
  out: './drizzle',
  dialect: 'postgresql',
  dbCredentials: {
    host: 'localhost',
    user: 'user',
    password: 'password',
    database: 'calorie_tracker',
    port: 13306,
    ssl: false,
  }
});
