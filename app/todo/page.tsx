"use client";

import Modal from "@/components/Modal";
import TodoHeader from "@/components/TodoHeader";
import { RootState } from "@/lib/store";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { MdDelete } from "react-icons/md";
import { IoPencil } from "react-icons/io5";
const Todo = () => {
  const router = useRouter();
  const isSingedIn = useSelector((state: RootState) => state.auth.isSignedIn);
  const todos = useSelector((state: RootState) => state.todos.todos);
  const [showModal, setShowModal] = useState(false);
  console.log(todos);

  // redirect user to signin if not signed in
  useEffect(() => {
    if (!isSingedIn) router.replace("/");
  }, [router, isSingedIn]);

  return (
    <main className="mx-auto max-w-7xl bg-white pt-6">
      <h1 className="mb-6 text-center text-4xl font-extrabold">TODO LIST</h1>
      <TodoHeader setShowModal={setShowModal} />
      <Modal showModal={showModal} setShowModal={setShowModal} />
      <section className="mx-auto max-w-3xl rounded-lg bg-[#ECEDF6]">
        <ul className="w-full p-5">
          <li className="flex justify-between bg-white px-3 py-3">
            <div className="flex items-center gap-2">
              <input type="checkbox" className="checkbox checkbox-md" />
              <span className="bg-black transition-all peer-checked:h-1 peer-checked:w-1"></span>
              <div className="flex flex-col">
                <span className="font-medium">build a lot of saas</span>
                <span className="text-xs text-gray-500">
                  9:32 PM, 02/15/2024
                </span>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="flex h-8 w-8 cursor-pointer items-center justify-center rounded-lg bg-[#DEDFE1] transition hover:bg-[#CCCDDE]">
                <MdDelete className="h-5 w-5" />
              </div>
              <div className="flex h-8 w-8 cursor-pointer items-center justify-center rounded-lg bg-[#DEDFE1] transition hover:bg-[#CCCDDE]">
                <IoPencil className="h-5 w-5" />
              </div>
            </div>
          </li>
        </ul>
      </section>
    </main>
  );
};

export default Todo;
