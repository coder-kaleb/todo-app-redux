import { Schema, model, models } from "mongoose";

const todoSchema = new Schema(
  {
    title: String,
    status: String,
  },
  {
    timestamps: true,
  },
);

export const Todos = models.Todo || model("Todo", todoSchema);
