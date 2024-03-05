import React, { useState } from "react";
import Todo from "./Todo";
import { StateType } from "@/types";

type Props = Omit<StateType, "loading" | "isOpen">;
const TodoLists = ({ todos }: Props) => {
  return (
    <ul className=" w-full p-3 sm:p-5">
      {todos.map((todo) => (
        <Todo
          isCompleted={todo.isCompleted}
          title={todo.title}
          createdAt={todo.updatedAt}
          key={todo._id}
          _id={todo._id}
        />
      ))}
    </ul>
  );
};

export default TodoLists;
