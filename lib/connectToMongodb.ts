import { connect } from "mongoose";

export default async function connectToMongoDB() {
  try {
    await connect(process.env.MONGODB_URI!);
  } catch (error) {
    alert(error);
  }
}
