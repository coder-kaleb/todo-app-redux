import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./features/auth/authSlice";
import todosReducer from "./features/todo/todoSlice";
import { useDispatch } from "react-redux";
export const store = configureStore({
  reducer: {
    auth: authReducer,
    todos: todosReducer,
  },
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;
