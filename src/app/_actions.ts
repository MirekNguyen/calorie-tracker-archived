import db from '../../db/db';
import { users } from '../../db/schema';

export async function fetchUsers (){
  const fetchedUsers = await db.select().from(users);
  return fetchedUsers;
}
