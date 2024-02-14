"use client";

import Modal from "@/components/Modal";
import TodoHeader from "@/components/TodoHeader";
import { RootState } from "@/lib/store";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const Todo = () => {
  const router = useRouter();
  const isSingedIn = useSelector((state: RootState) => state.auth.isSignedIn);
  const [showModal, setShowModal] = useState(false);
  console.log(showModal);

  // redirect user to signin if not signed in
  useEffect(() => {
    if (!isSingedIn) router.replace("/");
  }, [router, isSingedIn]);

  return (
    <main className="mx-auto max-w-7xl bg-white pt-6 text-center">
      <h1 className="mb-6 text-4xl font-extrabold">TODO LIST</h1>
      <TodoHeader setShowModal={setShowModal} />
      <Modal showModal={showModal} setShowModal={setShowModal} />
      <section></section>
    </main>
  );
};

export default Todo;
