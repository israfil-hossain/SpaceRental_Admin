import { CircularProgress } from "@mui/material";
import React from "react";

const Loader = ({size = 30}) => {
  return (
    <div className="flex w-full h-full justify-center items-center">
      <CircularProgress size={size} color="secondary"/>
    </div>
  );
};

export default Loader;
