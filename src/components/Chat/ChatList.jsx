import React, { useState } from "react";
import CustomSearchField from "../common/SearchField";

import { profile } from "../../assets";
import { CommonButton } from "../common/ui";
import { useQuery } from "@tanstack/react-query";
import { API } from "../../api/endpoints";
import { CircularProgress, Pagination } from "@mui/material";
import Loader from "../common/Loader";

const ChatList = ({ setIsOpen, setId, setUser }) => {
  const [page, setPage] = useState(1);
  const [size, setSize] = useState(10);
  const [name, setName] = useState("");
  const [supportStatus, setSupportStatus] = useState("OPEN");

  const handlePageChange = (event, value) => {
    setPage(value); // Update page when user selects a different page
  };

  const { data: allticket = {}, isLoading: ticketLoading } = useQuery([
    `${API.GetAllTicket}?Page=${page}&PageSize=${size}&TitleSearch=${name}&SupportStatus=${supportStatus}`,
  ]);

  console.log("ticket : ", allticket);
  return (
    <div className="w-96 border border-primary rounded-2xl overflow-hidden">
      <div className="flex justify-between space-x-5 p-4">
        <CustomSearchField name={name} onChange={setName} />
        <CommonButton text={"filter"} className=" hover:bg-[#eaf9c4]" />
      </div>
      {ticketLoading ? (
        <Loader />
      ) : (
        <>
          <div className=" h-[65vh] overflow-y-scroll scrollbar-thin scrollbar-thumb-primary scrollbar-track-gray-200">
            <div className=" w-full space-y-2 ">
              {allticket?.data?.map((item, id) => (
                <div
                  className="flex justify-around px-3 space-x-2 bg-gray-100 py-3 rounded-xl cursor-pointer"
                  key={id}
                  onClick={() => {
                    setIsOpen(true);
                    setId(item?._id);
                    setUser(item);
                  }}
                >
                  <img
                    src={item?.supportUser?.profilePicture || profile}
                    alt="profile"
                    className="w-12 h-12 rounded-full "
                  />
                  <div className="flex flex-col justify-center ">
                    <p>{item?.supportUser?.fullName} </p>
                    <p className="text-[12px] text-gray-400">{item?.title}</p>
                  </div>
                  <p className="text-[14px] text-gray-800">{"  "}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="flex justify-center mt-5">
            <Pagination
              count={allticket?.totalPages} // Total number of pages
              page={page} // Current page
              onChange={handlePageChange} // Handle page change
              color="primary"
              shape="rounded"
            />
          </div>
        </>
      )}
    </div>
  );
};

export default ChatList;
