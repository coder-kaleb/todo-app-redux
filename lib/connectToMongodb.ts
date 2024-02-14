import { connect } from "mongoose";

export default async function connectToMongoDB() {
  try {
    await connect(process.env.MONGODB_URI!);
    console.log("MongoDB Connected");
  } catch (error) {
    alert(error);
  }
}
