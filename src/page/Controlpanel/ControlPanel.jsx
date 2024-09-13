//External Import
import { Box, Breadcrumbs } from "@mui/material";
import React, { Fragment, useState } from "react";
import { Link } from "react-router-dom";
//icons
import { AiOutlineControl } from "react-icons/ai";
//Internal Imports


import permissionActions from "../../constants/Actions/PermissionsActions";
import userData from "../../constants/Data/dashboardData";

//Headings ...
import { permissionHeadings } from "../../constants/TableColumns/headings";

//hooks and API endpoints
import Commision from "../../components/ControlPanel/Commision";
import Condition from "../../components/ControlPanel/Condition";
import SpaceType from "../../components/ControlPanel/spaceType/SpaceType";
import DefaultTable from "../../components/common/DefaultTable";
import PackageBreadcrumb from "../../components/common/PackageBreadcrumb";

const ControlPanel = () => {
  const [page, setPage] = useState(1);
  const [size, setSize] = useState(10);

  return (
    <Fragment>
      <div className=" ">
        <PackageBreadcrumb>
          <Breadcrumbs aria-label="breadcrumb">
            <Link underline="hover" color="grey" href="/category">
              <Box sx={{ justifyContent: "center", display: "flex" }}>
                <AiOutlineControl
                  size={23}
                  className="min-w-max text-gray-700"
                />
                <span className="text-gray-700 ">&nbsp; ControlPanel </span>
              </Box>
            </Link>
            {/* <Typography color="grey">sdfgh</Typography> */}
          </Breadcrumbs>
        </PackageBreadcrumb>
        <div className="px-4  ">
          <div className="grid lg:grid-cols-2 gap-6 xs:grid-cols-1">
            <div>
              {/* Commision Setting  ...............*/}
              <Commision />

              {/* SpaceType Setting  */}
              <SpaceType />
            </div>
            <div className="">
              {/* Condition Setting  */}
              <Condition />
              {/* Permission Management .........*/}
              <div className="mt-5 border border-primary rounded-lg p-5 bg-white">
                <div className="flex justify-between ">
                  <p className="text-lg font-semibold ">
                    Permission Management
                  </p>
                </div>
                <div className="mt-4 pb-3 ">
                  <DefaultTable
                    actionLabel={"Permission"}
                    isLoading={false}
                    headings={permissionHeadings}
                    data={userData?.topUser}
                    disablePagination={true}
                    size={size}
                    setSize={setSize}
                    page={page}
                    setPage={setPage}
                    actionIcons={permissionActions}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default ControlPanel;
