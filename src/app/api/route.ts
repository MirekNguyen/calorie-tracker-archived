import { postMealEntry } from "@/app/_actions";
import type { NextApiRequest, NextApiResponse } from "next";
import { NextRequest, NextResponse } from "next/server";

type ResponseData = {
  message: string;
};

export async function GET() {
  const response = await postMealEntry("test2");
  return NextResponse.json({ message: "Hello from Next.js!" });
}
