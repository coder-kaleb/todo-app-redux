"use client";

import Modal from "@/components/Modal";
import TodoHeader from "@/components/TodoHeader";
import { AppDispatch, RootState } from "@/lib/store";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import TodoLists from "@/components/TodoLists";
import { fetchAllTodos } from "@/lib/features/todo/todoSlice";
import { TodoProps } from "@/types";
const Todo = () => {
  const [filterValue, setFilterValue] = useState("");
  const [filterTodos, setFilterTodos] = useState<TodoProps[]>([]);
  const allTodos = useSelector((state: RootState) => state.todos.todos);
  const isSingedIn = useSelector((state: RootState) => state.auth.isSignedIn);
  const router = useRouter();
  const isLoading = useSelector((state: RootState) => state.todos.loading);
  const dispatch = useDispatch<AppDispatch>();

  // redirect user to signin if not signed in
  useEffect(() => {
    if (!isSingedIn) router.replace("/");
    dispatch(fetchAllTodos());
  }, [dispatch, isSingedIn, router]);

  useEffect(() => {
    switch (filterValue) {
      case "completed":
        setFilterTodos(allTodos.filter((todo) => todo.isCompleted));
        break;
      case "incompleted":
        setFilterTodos(allTodos.filter((todo) => !todo.isCompleted));
        break;
      default:
        setFilterTodos(allTodos);
        break;
    }
  }, [filterValue, allTodos]);

  return (
    <main className="mx-auto max-w-7xl bg-white pt-6">
      <h1 className="mb-6 text-center text-4xl font-extrabold">TODO LIST</h1>
      <TodoHeader filterValue={filterValue} setFilterValue={setFilterValue} />
      <section className="mx-auto max-w-3xl rounded-lg bg-[#ECEDF6] ">
        {isLoading ? (
          <div className="mx-auto text-center">
            <span className="loading loading-ring loading-lg"></span>
          </div>
        ) : allTodos.length === 0 ? (
          <h2 className="p-2 text-center">Create your todo</h2>
        ) : (
          <TodoLists todos={filterTodos} />
        )}
      </section>
    </main>
  );
};

export default Todo;
