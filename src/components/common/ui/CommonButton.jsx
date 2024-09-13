import React from "react";
import Loader from "../Loader";

export default function CommonButton(props) {
  const { className, icon, text, color, type, onClick, isLoading } = props;

  return (
    <button
      type={type}
      className={`${className} rounded-lg hover:bg-[#ffffff]  text-gray-800 lg:font-bold xs:font-normal py-2 lg:px-4 xs:px-2 inline-flex items-center space-x-2`}
      onClick={onClick}
    >
      {icon ? icon : ""}
      {isLoading ? (
        <Loader size={20}/>
      ) : (
        <span className="lg:text-sm xs:text-xs ">{text}</span>
      )}
    </button>
  );
}
