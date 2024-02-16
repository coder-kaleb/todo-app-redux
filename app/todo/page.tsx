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
  const isLoading = useSelector((state: RootState) => state.auth.isSignedIn);
  console.log(isLoading)
  const [showModal, setShowModal] = useState(false);
  const dispatch = useDispatch<AppDispatch>();

  // redirect user to signin if not signed in
  useEffect(() => {
    // if (!isSingedIn) router.replace("/");
    dispatch(fetchAllTodos());
  }, [dispatch]);

  return (
    <main className="mx-auto max-w-7xl bg-white pt-6">
      <h1 className="mb-6 text-center text-4xl font-extrabold">TODO LIST</h1>
      <TodoHeader setShowModal={setShowModal} />
      <Modal showModal={showModal} setShowModal={setShowModal} />
      {isLoading ? <div>Loading</div> : <TodoLists todos={todos} />}
    </main>
  );
};

export default Todo;
