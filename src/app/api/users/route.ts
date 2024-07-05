import { findUsersWithPosts } from "@/app/_actions";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest, res: NextResponse) {
  const usersWithPosts = await findUsersWithPosts();
  return NextResponse.json(usersWithPosts);
}
