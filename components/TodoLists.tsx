import React, { useState } from "react";
import Todo from "./Todo";
import { StateType } from "@/types";

type Props = Omit<StateType, "loading">;
const TodoLists = ({ todos }: Props) => {
  console.log(todos);
  return (
    <ul className=" w-full p-5">
      {todos.map((todo) => (
        <Todo
          isCompleted={todo.isCompleted}
          title={todo.title}
          createdAt={todo.createdAt}
          key={todo.title}
          _id={todo._id}
        />
      ))}
    </ul>
  );
};

export default TodoLists;
