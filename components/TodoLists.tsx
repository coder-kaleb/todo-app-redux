import { AppDispatch, RootState } from "@/lib/store";
import React, { useState } from "react";
import Todo from "./Todo";
import { StateType } from "@/types";

type Props = Omit<StateType, "loading">;
const TodoLists = ({ todos }: Props) => {
  console.log(todos);
  return (
    <section className="mx-auto max-w-3xl rounded-lg bg-[#ECEDF6]">
      <ul className=" w-full p-5">
        {todos.map((todo) => (
          <Todo
            isCompleted={todo.isCompleted}
            title={todo.title}
            createdAt={todo.createdAt}
            key={todo._id}
            _id={todo._id}
          />
        ))}
      </ul>
    </section>
  );
};

export default TodoLists;
