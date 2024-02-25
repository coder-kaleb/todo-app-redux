import connectToMongoDB from "@/lib/connectToMongodb";
import { Todos } from "@/models/model";
import { NextResponse } from "next/server";

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
