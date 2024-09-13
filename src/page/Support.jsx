import { Box, Breadcrumbs } from "@mui/material";
import React, { useState } from "react";
import { MdContactSupport } from "react-icons/md";
import { Link } from "react-router-dom";
import Chat from "../components/Chat/Chat";
import ChatList from "../components/Chat/ChatList";
import PackageBreadcrumb from "../components/common/PackageBreadcrumb";
import { nomessage } from "../assets";

const Support = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [id, setId] = useState("");
  const [user,setUser] = useState();

  return (
    <>
      <div className=" overflow-hidden">
        <PackageBreadcrumb>
          <Breadcrumbs aria-label="breadcrumb">
            <Link underline="hover" color="grey" href="/support">
              <Box sx={{ justifyContent: "center", display: "flex" }}>
                <MdContactSupport
                  size={23}
                  className="min-w-max text-primary"
                />
                <span className="text-primary ">&nbsp;Support </span>
              </Box>
            </Link>
          </Breadcrumbs>
        </PackageBreadcrumb>
        <div className="flex h-[85vh]">
          <ChatList setIsOpen={setIsOpen} setId={setId} setUser={setUser}/>
          {isOpen ? (
            <Chat id={id} user={user}/>
          ) : (
            <div className="w-full h-full px-5 py-5 flex flex-col justify-center items-center">
              <img src={nomessage} alt="nomessage " className="w-60 h-60"/>{" "}
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Support;
