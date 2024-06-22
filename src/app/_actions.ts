import { eq } from 'drizzle-orm';
import db from '../../db/db';
import { meals, users } from '../../db/schema';

export async function fetchUsers () {
  const fetchedUsers = await db.select().from(users);
  return fetchedUsers;
}

export async function fetchIngredients() {
  const fetchedIngredients = await db.select().from(meals);
  return fetchedIngredients;
}

export async function fetchUserById (id: number) {
  const user = await db.query.users.findFirst({ where: eq(users.id, id) });
  return user;
}
