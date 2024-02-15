import connectToMongoDB from "@/lib/connectToMongodb";
import { Todos } from "@/models/model";
import { Todo } from "@/types";
import { NextResponse } from "next/server";

export async function GET() {
  await connectToMongoDB();
  const todos = Todos.find();
  return NextResponse.json({ todos });
}
interface Type {
  id: string;
  
}
export async function POST(req: Request) {
  const { isCompleted, title }: Todo = await req.json();
  await connectToMongoDB();
  const todo = await Todos.create({
    title,
    isCompleted,
  });
  return NextResponse.json(todo);
}
