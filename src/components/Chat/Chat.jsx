import React from "react";
import { profile } from "../../assets";
import CommonInputText from "../ui/CommonInputText";
import { IoSend } from "react-icons/io5";
import CommonButton from "../ui/CommonButton";

const Chat = () => {
  return (
    <div className="w-full h-[82vh] flex flex-col justify-between ">
      <div className="flex space-x-2 border-b border-primary pb-5 px-4 ">
        <img src={profile} alt="profile" className="w-12 h-12 rounded-full" />
        <div>
          <p className="text-[16px] text-gray-800">Cody Fisher </p>
          <p className="text-[12px] text-gray-400">
            Ut enim ad minima veniam st.
          </p>
        </div>
      </div>
      <div className="flex-1 overflow-y-auto px-4">
        {" "}
        {/* flex-1 allows this section to take up remaining vertical space */}
        {/* Your chat messages go here */}
        <div>Hello</div>
      </div>

      <div className="flex space-x-3 px-5">
        <CommonInputText placeholder={"Type here"} className="w-full " />
        <button>
          <IoSend
            size={50}
            className="text-white bg-primary hover:bg-[#b8b242] p-2 rounded-full "
          />
        </button>
      </div>
    </div>
  );
};

export default Chat;
