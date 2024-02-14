import React, { useState } from "react";
import { CgClose } from "react-icons/cg";
import Button from "./Button";

type Props = {
  showModal: boolean;
  setShowModal: (showModal: boolean) => void;
};
const Modal = ({ showModal }: Props) => {
  const [filterValue, setFilterValue] = useState("");

  return (
    <main
      className={`${showModal ? "flex" : "hidden"} fixed inset-0 z-[999] hidden h-screen  w-full bg-semi-transparent`}
    >
      <div className="mx-auto mt-7 flex w-full max-w-lg flex-col justify-center gap-2 px-4 ">
        <div className="group ml-auto flex h-9 w-9 cursor-pointer items-center justify-center rounded-lg bg-white transition duration-300 hover:bg-black">
          <CgClose className="h-6 w-6 text-black transition duration-300 group-hover:text-white" />
        </div>

        <div className="w-full rounded-lg bg-[#ECEDF6] ">
          <form className="flex flex-col gap-2 p-4 text-left">
            <h3 className="mb-3 text-xl font-extrabold text-black">Add TODO</h3>
            <span className="text-md font-medium text-black">Title</span>
            <input
              type="text"
              name="title"
              required
              className="mb-4 flex-1 bg-white px-2 py-2 text-xl outline-none"
            />

            {/*  Filter by value */}
            <label
              htmlFor="filterBy"
              className="text-md font-medium text-gray-900"
            >
              Status
            </label>
            <select
              className="mb-6 flex-1 bg-white px-2 py-3 font-medium text-black outline-none"
              value={filterValue}
              id="filterBy"
              onChange={(e) => setFilterValue(e.target.value)}
            >
              <option value="incompleted" className=" text-lg font-medium">
                Incomplete
              </option>
              <option value="completed" className=" text-lg font-medium">
                Completed
              </option>
            </select>

            <div className="flex gap-3">
              <Button style=" btn-neutral" type="submit" label="Add" />

              <Button style=" btn-outline" type="button" label="Cancel" />
            </div>
          </form>
        </div>
      </div>
    </main>
  );
};

export default Modal;
