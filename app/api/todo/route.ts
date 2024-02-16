import connectToMongoDB from "@/lib/connectToMongodb";
import { Todos } from "@/models/model";
import { TodoProps } from "@/types";
import { NextResponse } from "next/server";

export async function GET() {
  await connectToMongoDB();
  const todos = await Todos.find({});
  return NextResponse.json( todos );
}

export async function POST(req: Request) {
  const { isCompleted, title }: TodoProps = await req.json();
  await connectToMongoDB();
  const todo = await Todos.create({
    title,
    isCompleted,
  });
  return NextResponse.json(todo);
}
