import React, { useState } from "react";
import { profile } from "../../assets";

import { IoSend } from "react-icons/io5";
import { CommonInputText } from "../common/ui";
import { API } from "../../api/endpoints";
import { CircularProgress } from "@mui/material";
import { useQuery } from "@tanstack/react-query";
import Loader from "../common/Loader";
import { formatDateandTime } from "../../utils/CommonFunction";
import { useCreate } from "../../hooks";
import { toast } from "react-toastify";
import CustomSearchField from "../common/SearchField";

const Chat = ({ id, user }) => {
  const [page, setPage] = useState(1);
  const [size, setSize] = useState(1000);
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  console.log("user", user);

  const {
    data: allmessage = {},
    isLoading: allmessageLoading,
    refetch,
  } = useQuery([
    `${
      API.GetAllMessage + id
    }?Page=${page}&PageSize=${size}&MessageSearch=${name}`,
  ]);

  const { mutateAsync: createmutate, isLoading: createLoading } = useCreate({
    endpoint: API.AddMessage + id,
    onSuccess: (data) => {
      refetch();
      setMessage("");
    },
    onError: (error) => {
      // Handle update error, e.g., display an error message
      console.error("Update failed", error);
      toast.error("Something went wrong !");
    },
  });

  const handleSubmit = async () => {
    try {
      const payload = {
        message: message,
      };
      await createmutate(payload);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="w-full h-[82vh] flex flex-col justify-between ">
      {allmessageLoading ? (
        <Loader />
      ) : (
        <>
          <div className="flex space-x-2 justify-between border-b border-primary pb-5 px-4 ">
            <div className="flex space-x-2 ">
              <img
                src={user?.supportUser?.profilePicture || profile}
                alt="profile"
                className="w-12 h-12 rounded-full"
              />
              <div>
                <p className="text-[16px] text-gray-800">
                  {user?.supportUser?.fullName}{" "}
                  <span className="text-[10px]">
                    {"( " + user?.supportUser?.role + " )"}
                  </span>{" "}
                </p>
                <p className="text-[12px] text-gray-400">{user?.title}</p>
              </div>
            </div>
            {/* <CustomSearchField name={name} onChange={setName} placeholder="Search Message"/> */}
          </div>
          <div className="flex-1 overflow-y-auto px-4 scrollbar-thin scrollbar-thumb-primary scrollbar-track-gray-200">
            {allmessage?.data
              ?.sort((a, b) => new Date(a.sendTime) - new Date(b.sendTime)) // Sort messages in ascending order by sendTime
              .map((item, id) => (
                <div className="flex-1 " key={id}>
                  <div className="px-4 py-3">
                    {item?.sender.role !== "ADMIN" && (
                      <div className="flex gap-3 py-3">
                        <div className="w-12 h-12 rounded-full bg-rose-400 p-0.5">
                          <img
                            src={item?.sender?.profilePicture || profile}
                            alt="user"
                            className="h-full w-full object-cover rounded-full"
                          />
                        </div>

                        <div className="flex flex-col justify-between text-sm p-5 w-[75%] bg-slate-600 text-slate-100 rounded-lg relative before:absolute before:content-[''] before:w-3 before:h-3 before:bg-slate-600 before:rotate-45 before: before:-left-1 before:top-4">
                          <p className="text-[14px] text-base">
                            {item?.message}
                          </p>
                          <p className="mt-2 flex justify-start text-slate-400 text-[12px]">
                            {formatDateandTime(item?.sendTime)}
                          </p>
                        </div>
                      </div>
                    )}

                    {item?.sender?.role === "ADMIN" && (
                      <div className="flex items-center justify-end gap-3">
                        <div className="text-sm p-5 w-[75%] bg-slate-600 text-slate-100 rounded-lg relative ">
                          <p className="text-[14px] text-base">
                            {item?.message}
                          </p>
                          <p className="mt-2 flex justify-start text-slate-400 text-[12px]">
                            {formatDateandTime(item?.sendTime)}
                          </p>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              ))}
          </div>
        </>
      )}

      <div className="flex w-[100%] space-x-3 px-5 mt-5">
        <input
          type="text"
          name="message"
          className={`border border-gray-300   bg-[#E7E9E2] rounded-xl py-2 px-3 w-full focus:outline-none focus:ring-1 focus:border-yellow-500 `}
          placeholder={"Type Here.."}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <button disabled={message.length === 0} onClick={handleSubmit}>
          {createLoading ? (
            <CircularProgress />
          ) : (
            <IoSend
              size={40}
              className={`text-white ${
                message?.length === 0
                  ? "bg-gray-400 cursor-not-allowed"
                  : "bg-primary hover:bg-[#b8b242] "
              }  p-2 rounded-full `}
            />
          )}
        </button>
      </div>
    </div>
  );
};

export default Chat;
