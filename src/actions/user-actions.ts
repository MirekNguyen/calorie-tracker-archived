import db from "../../db/db";

export async function findUsersWithPosts() {
  const users = await db.query.users.findMany({
    with: {
      posts: true
    }
  });
  return users;
}
