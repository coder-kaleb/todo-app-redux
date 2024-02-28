import { StateType, TodoProps } from "@/types";
import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";

type PostProps = Omit<TodoProps, "_id">;
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

//  toggle todo isCompleted
interface IToggelComplete {
  id: string;
  isCompleted: boolean;
}
export const toggleTodoIsCompleted = createAsyncThunk(
  "todo/toggleTodoIsCompleted",
  async (data: IToggelComplete) => {
    const { id, isCompleted } = data;
    try {
      const res = await fetch(`http://localhost:3000/api/todo/`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ isCompleted, id }),
      });
      if (!res.ok) {
        throw new Error(`API request failed with status ${res.status}`);
      }
      return res.json();
    } catch (error) {
      console.log("Error while updating todo", error);
    }
  },
);

// update todo thunk
// export const updateTodo = createAsyncThunk("todo/updateTodo", async (data: PostProps) => {
//   const { title, isCompleted } = data;
//   try {
//     const res = await fetch(`http://localhost:3000/api/todo/${id}`, {
//       method: "PATCH",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify({ title, isCompleted }),
//     });
//     if (!res.ok) {
//       throw new Error(`API request failed with status ${res.status}`);
//     }
//     return res.json();
//   } catch (error) {
//     console.log("Error while updating todo", error);
//   }
// });

export const updateTodo = createAsyncThunk(
  "todo/updateTodo",
  async (data: TodoProps) => {
    const { title, isCompleted, _id } = data;
    try {
      const res = await fetch(`http://localhost:3000/api/todo/${_id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ title, isCompleted }),
      });
      if (!res.ok) {
        throw new Error(
          `API request failed to update with status code ${res.status}`,
        );
      }
      return res.json();
    } catch (error) {
      console.log("Error while updating todo", error);
    }
  },
);

const initialState: StateType = {
  loading: false,
  todos: [],
};
const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(postTodo.pending, (state) => {
        state.loading = true;
      })
      .addCase(
        postTodo.fulfilled,
        (state, action: PayloadAction<TodoProps>) => {
          state.todos.unshift(action.payload);
          state.loading = false;
        },
      )
      .addCase(fetchAllTodos.pending, (state) => {
        state.loading = true;
      })
      .addCase(
        fetchAllTodos.fulfilled,
        (state, action: PayloadAction<TodoProps[]>) => {
          state.todos = action.payload;
          state.loading = false;
        },
      )
      .addCase(
        toggleTodoIsCompleted.fulfilled,
        (state, action: PayloadAction<TodoProps>) => {
          const { _id, isCompleted } = action.payload;
          console.log("action.payload", action.payload);
          const index = state.todos.findIndex((todo) => todo._id === _id);
          if (index !== -1) {
            state.todos[index].isCompleted = isCompleted;
          } else {
            console.log(`No Todo found for id : ${action.payload._id}`);
          }
        },
      )
      .addCase(updateTodo.pending, (state) => {
        state.loading = true;
      })
      .addCase(
        updateTodo.fulfilled,
        (state, action: PayloadAction<TodoProps>) => {
          // const { _id, title, isCompleted } = action.payload;
          // const index = state.todos.findIndex((todo) => todo._id === _id);
          // if (index !== -1) {
          // state.todos[index].title = title;
          // state.todos[index].isCompleted = isCompleted;
          // } else {
          // console.log(`No Todo found for id : ${_id}`);
          state.loading = false;
          // }
        },
      );
  },
});
export default todoSlice.reducer;
