import { StateType, TodoProps } from "@/types";
import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState: StateType = {
  loading: false,
  todos: [],
};

type PostProps = Omit<TodoProps, "id">;
export const postTodo = createAsyncThunk(
  "todo/postTodo",
  async (data: PostProps) => {
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
export const fetchAllTodos = createAsyncThunk(
  "todo/fetchAllTodos",
  async () => {
    try {
      const res = await fetch("http://localhost:3000/api/todo", {
        cache: "no-store",
      });
      if (!res.ok) {
        throw new Error(
          `API request faild to fetch all todos with status ${res.status}`,
        );
      }
      return res.json();
    } catch (error) {
      console.log("Error while fetching all todos", error);
    }
  },
);

const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    toggleIsCompleted: (state, action: PayloadAction<string>) => {
      console.log(action.payload);
      const index = state.todos.findIndex((todo) => (todo._id = action.payload));
      if (index !== -1) {
        state.todos[index].isCompleted = !state.todos[index].isCompleted;
      } else {
        console.log(`No Todo found for id : ${action.payload}`);
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(
        postTodo.fulfilled,
        (state, action: PayloadAction<TodoProps>) => {
          state.todos.unshift(action.payload);
        },
      )
      .addCase(postTodo.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchAllTodos.pending, (state) => {
        state.loading = true;
      })
      .addCase(
        fetchAllTodos.fulfilled,
        (state, action: PayloadAction<TodoProps[]>) => {
          state.todos = action.payload;
          state.loading = false;
        },
      );
  },
});
export const { toggleIsCompleted } = todoSlice.actions;
export default todoSlice.reducer;
