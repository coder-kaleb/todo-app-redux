import connectToMongoDB from "@/lib/connectToMongodb";
import { Todos } from "@/models/model";
import { NextResponse } from "next/server";

export async function PATCH(
  req: Request,
  { params }: { params: { id: string } },
) {
  try {
    const { isCompleted } = await req.json();
    await connectToMongoDB();
    const updatedTodo = await Todos.findOne(
      { _id: params.id },
      // Return the updated document
    );
    updatedTodo.isCompleted = isCompleted;
    await updatedTodo.save();
    return NextResponse.json(updatedTodo);
  } catch (error) {
    console.error("Error updating todo:", error);
  }
}
