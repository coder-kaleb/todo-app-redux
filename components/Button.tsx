"use client";
import { MouseEvent } from "react";

interface Props {
  handleClick?: (e?: MouseEvent<HTMLButtonElement>) => void;
  handleModal?:  () => void;
  pending?: boolean;
  label: string;
  style: string;
  type: "submit" | "button" | "reset";
}

const Button = ({ handleClick, pending, label, type, style }: Props) => {
  return (
    <>
      <button
        className={`btn text-lg  ${style}`}
        type={type}
        onClick={handleClick}
      >
        {label}
        {pending ? <span className="loading loading-spinner"></span> : ""}
      </button>
    </>
  );
};

export default Button;
