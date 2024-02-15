import { Schema, model, models } from "mongoose";

const todoSchema = new Schema(
  {
    title: String,
    isCompleted: Boolean,
  },
  {
    timestamps: true,
  },
);

export const Todos = models.Todo || model("Todo", todoSchema);
