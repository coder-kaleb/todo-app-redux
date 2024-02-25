import { toggleTodoIsCompleted } from "@/lib/features/todo/todoSlice";
import { AppDispatch } from "@/lib/store";
import { TodoProps } from "@/types";
import { fetchSingleTodo } from "@/utils";
import React, { useEffect, useState } from "react";
import { IoPencil } from "react-icons/io5";
import { MdDelete } from "react-icons/md";
import { useDispatch } from "react-redux";
import Modal from "./Modal";

const Todo = ({ title, createdAt, _id, isCompleted }: TodoProps) => {
  const [updateModal, setUpdateModal] = useState(false);
  const [check, setCheck] = useState(false);
  const dispatch = useDispatch<AppDispatch>();
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const isChecked = e.target.checked;
    setCheck(e.target.checked);
    console.log(isChecked);
    dispatch(toggleTodoIsCompleted({ id: _id, isCompleted: isChecked }));
  };
  useEffect(() => {
    setCheck(isCompleted);
  }, [isCompleted]);
  const formattedDate = new Date(`${createdAt}`)
    .toLocaleString()
    .split(",")
    .reverse()
    .join(", ");

  const handleUpdate = () => {
    setUpdateModal(true);
  };
  return (
    <>
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
              data-content={title}
              className={`${check ? "text-[#585858] opacity-90 before:w-full" : ""} relative w-fit font-medium transition before:absolute before:left-0 before:top-1/2 before:h-[2px] before:w-0 before:bg-[#585858] before:transition-all before:duration-500`}
            >
              {title}
            </span>
            <span className="text-xs text-gray-500">{formattedDate}</span>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <div className="flex h-8 w-8 cursor-pointer items-center justify-center rounded-lg bg-[#DEDFE1] transition hover:bg-[#CCCDDE]">
            <MdDelete className="h-5 w-5" />
          </div>
          <div
            className="flex h-8 w-8 cursor-pointer items-center justify-center rounded-lg bg-[#DEDFE1] transition hover:bg-[#CCCDDE]"
            onClick={handleUpdate}
          >
            <IoPencil className="h-5 w-5" />
          </div>
        </div>
      </li>
      <Modal type="add" openModal={updateModal} setOpenModal={setUpdateModal} />
    </>
  );
};

export default Todo;
