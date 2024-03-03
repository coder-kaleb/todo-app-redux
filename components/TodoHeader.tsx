import React, { useState } from "react";
import Modal from "./Modal";

interface IHeader {
  filterValue: string;
  setFilterValue: React.Dispatch<React.SetStateAction<string>>;
}
const TodoHeader = ({ filterValue, setFilterValue }: IHeader) => {
  const [openModal, setOpenModal] = useState(false);
  return (
    <>
      <div className="mx-auto mb-4 flex max-w-3xl items-center justify-between bg-white">
        <button className="btn btn-neutral" onClick={() => setOpenModal(true)}>
          Add Task
        </button>
        <select
          className=" rounded-lg border-2 border-gray-500 bg-white px-2 py-3 font-medium text-black outline-none"
          value={filterValue}
          onChange={(e) => setFilterValue(e.target.value)}
        >
          <option value="all" className="text-lg font-medium">
            All
          </option>
          <option value="completed" className="text-lg font-medium">
            Completed
          </option>
          <option value="incompleted" className="text-lg font-medium">
            Incomplete
          </option>
        </select>
      </div>
      <Modal type="add" openModal={openModal} setOpenModal={setOpenModal} />
    </>
  );
};

export default TodoHeader;
