import React, { useState } from "react";

interface Props {
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
}
const TodoHeader = ({ setShowModal }: Props) => {
  const [filterValue, setFilterValue] = useState("");

  return (
    <div className="mx-auto mb-4 flex max-w-3xl items-center justify-between bg-white">
      <button className="btn btn-neutral" onClick={() => setShowModal(true)}>
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
  );
};

export default TodoHeader;
