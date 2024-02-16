import { toggleIsCompleted } from "@/lib/features/todo/todoSlice";
import { AppDispatch, RootState } from "@/lib/store";
import { TodoProps } from "@/types";
import React, { useEffect, useState } from "react";
import { IoPencil } from "react-icons/io5";
import { MdDelete } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";

const Todo = ({ title, createdAt, _id }: TodoProps) => {
  const [check, setCheck] = useState(false);
  const isCompelted = useSelector((state: RootState) => state.todos.todos);
  console.log(isCompelted);
  const dispatch = useDispatch<AppDispatch>();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCheck(e.target.checked);
    dispatch(toggleIsCompleted(_id));
  };

  return (
    <li className="mb-2 flex justify-between bg-white px-3 py-3">
      <div className="flex items-center gap-2">
        <input
          type="checkbox"
          checked={check}
          onChange={handleChange}
          className="checkbox checkbox-md"
        />
        <span className="bg-black transition-all peer-checked:h-1 peer-checked:w-1"></span>
        <div className="flex flex-col">
          <span
            className={`${check ? "text-[#585858] opacity-90 before:w-full" : ""} relative font-medium transition before:absolute before:left-0 before:top-1/2 before:h-[2px] before:w-0 before:bg-[#585858] before:transition-all before:duration-500`}
          >
            {title}
          </span>
          <span className="text-xs text-gray-500">9:32 PM, 02/15/2024</span>
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
  );
};

export default Todo;
