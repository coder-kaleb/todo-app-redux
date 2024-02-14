import connectToMongoDB from "@/lib/connectToMongodb";
import { Todos } from "@/models/model";
import { FeedBack } from "@/types";
import { NextApiRequest } from "next";
import { NextResponse } from "next/server";

export async function GET() {
  await connectToMongoDB();
  const todos = Todos.find();
  return NextResponse.json({ todos });
}


export async function POST(req: Request) {
  const { status, title}: FeedBack = await req.json()
  await connectToMongoDB();
  
}
