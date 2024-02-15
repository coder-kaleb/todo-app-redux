import { StateType, Todo } from "@/types";
import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState: StateType = {
  todos: [],
};

export const postTodo = createAsyncThunk(
  "todo/postTodo",
  async (data: Todo) => {
    const { title, isCompleted } = data;
    try {
      const res = await fetch("http://localhost:3000/api/todo", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ title, isCompleted }),
      });
      if (!res.ok) {
        throw new Error(`API request failed with status ${res.status}`);
      }
      return res.json();
    } catch (error) {
      console.log("Error while creating todo", error);
    }
  },
);

// get all todos from db

const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(
      postTodo.fulfilled,
      (state, action: PayloadAction<Todo>) => {
        state.todos.unshift(action.payload);
      },
    );
  },
});

export default todoSlice.reducer;
