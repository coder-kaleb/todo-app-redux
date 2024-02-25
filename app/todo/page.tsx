"use client";

import Modal from "@/components/Modal";
import TodoHeader from "@/components/TodoHeader";
import { AppDispatch, RootState } from "@/lib/store";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import TodoLists from "@/components/TodoLists";
import { fetchAllTodos } from "@/lib/features/todo/todoSlice";
const Todo = () => {
  const router = useRouter();
  const todos = useSelector((state: RootState) => state.todos.todos);
  const isLoading = useSelector((state: RootState) => state.todos.loading);
  const [showModal, setShowModal] = useState(false);
  const dispatch = useDispatch<AppDispatch>();
  console.log(todos);
  // redirect user to signin if not signed in
  useEffect(() => {
    // if (!isSingedIn) router.replace("/");
    dispatch(fetchAllTodos());
  }, [dispatch]);

  return (
    <main className="mx-auto max-w-7xl bg-white pt-6">
      <h1 className="mb-6 text-center text-4xl font-extrabold">TODO LIST</h1>
      <TodoHeader />
      
      <section className="mx-auto max-w-3xl rounded-lg bg-[#ECEDF6] ">
        {isLoading ? (
          <div className="mx-auto text-center">
            <span className="loading loading-ring loading-lg"></span>
          </div>
        ) : todos.length === 0 ? (
          <h2 className="p-2 text-center">Create your todo</h2>
        ) : (
          <TodoLists todos={todos} />
        )}
      </section>
    </main>
  );
};

export default Todo;
