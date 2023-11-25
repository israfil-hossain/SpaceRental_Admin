import React from "react";
import { Link } from "react-router-dom";
import PackageBreadcrumb from "../components/common/PackageBreadcrumb";
import { Box, Breadcrumbs } from "@mui/material";
import { MdContactSupport } from "react-icons/md";
import ChatList from "../components/Chat/ChatList";
import Chat from "../components/Chat/Chat";
const Support = () => {
  return (
    <>
    <div className=" overflow-hidden">
      <PackageBreadcrumb>
        <Breadcrumbs aria-label="breadcrumb">
          <Link underline="hover" color="grey" href="/support">
            <Box sx={{ justifyContent: "center", display: "flex" }}>
              <MdContactSupport size={23} className="min-w-max text-primary" />
              <span className="text-primary ">&nbsp;Support </span>
            </Box>
          </Link>
        </Breadcrumbs>
      </PackageBreadcrumb>
      <div className="flex h-[85vh]">
        <ChatList />
        <Chat />

      </div>
      </div>
    </>
  );
};

export default Support;
