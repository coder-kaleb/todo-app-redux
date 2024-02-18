import connectToMongoDB from "@/lib/connectToMongodb";
import { Todos } from "@/models/model";
import { TodoProps } from "@/types";
import { NextResponse } from "next/server";

export async function GET() {
  await connectToMongoDB();
  const todos = await Todos.find({}).sort({ createdAt: -1 }).exec();
  return NextResponse.json(todos);
}

export async function POST(req: Request) {
  try {
    const { isCompleted, title }: TodoProps = await req.json();
    await connectToMongoDB();
    const todo: TodoProps = await Todos.create({
      title,
      isCompleted,
    });
    return NextResponse.json(todo);
  } catch (error) {
    console.error("Error creating todo:", error);
  }
}


