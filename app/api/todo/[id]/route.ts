import connectToMongoDB from "@/lib/connectToMongodb";
import { Todos } from "@/models/model";
import { TodoProps } from "@/types";
import { NextRequest, NextResponse } from "next/server";

export async function GET(
  req: NextResponse,
  { params }: { params: { id: string } },
) {
  try {
    await connectToMongoDB();
    const todo = await Todos.findOne({ _id: params.id });
    return NextResponse.json(todo);
  } catch (error) {
    console.log(`Error while getting a single doc`, error);
  }
}

export async function PUT(
  req: Request,
  { params }: { params: { id: string } },
) {
  try {
    const { title, isCompleted } = await req.json();
    await connectToMongoDB();
    const todo = await Todos.findOne({ _id: params.id });
    todo.title = title;
    todo.isCompleted = isCompleted;
    await todo.save();
    return NextResponse.json(todo);
  } catch (error) {
    console.log("Error while update todo:", error);
  }
}
