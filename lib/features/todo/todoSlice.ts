import { StateType, Todo } from "@/types";
import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState: StateType = {
  todos: [],
};

export const postTodo = createAsyncThunk("todo/post", async (title, status) => {
  const res = await fetch("http://localhost:3000/api/todo", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ title, status }),
  });
});

// get all todos from db

const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<Todo>) => {
      state.todos.push(action.payload);
    },
  },
});

export const { addTodo } = todoSlice.actions;
export default todoSlice.reducer;
