import React, { useState } from "react";

const TodoHeader = () => {
  const [filterValue, setFilterValue] = useState("");
  const openModal = () => {};

  return (
    <div className="mx-auto flex max-w-3xl items-center justify-between bg-white px-5">
      <button className="btn btn-neutral" onClick={openModal}>
        Add Task
      </button>
      <select
        className=" text-black rounded-lg border-2 border-gray-500 bg-white px-2 py-3 font-medium outline-none"
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
