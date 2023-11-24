//External Import
import React, { Fragment, useState } from "react";
import { Link } from "react-router-dom";
import { Box, Breadcrumbs } from "@mui/material";
//icons

//Internal Imports
import CommonSelect from "../components/ui/CommonSelect";
import CommonButton from "../components/ui/CommonButton";
import PackageBreadcrumb from "../components/common/PackageBreadcrumb";
import { AiOutlineControl } from "react-icons/ai";
import { commisions, commisionPercent, Status } from "../constants/Data/constantsData";
import DefaultTable from "../components/common/DefaultTable";
import { conditionHeadings, permissionHeadings } from "../constants/TableColumns/headings";
import userData from "../constants/Data/dashboardData";
import permissionActions from "../constants/Actions/PermissionsActions";
import controlData from "../constants/Data/controlData";
import conditionActions from "../constants/Actions/ConditionActions";
import CommonInputText from "../components/ui/CommonInputText";
import { isLargeScreen } from "../utils/CommonFunction";

const ControlPanel = () => {
  const [commisionspace, setCommisionSpace] = useState("space-owner");
  const [parcentspace, setCommisionPercent] = useState(1);
  const [commisionrenter, setCommisionRenter] = useState("rental-owner");
  const [parcentrenter, setCommisionPercentRent] = useState(1);
  const [status, setStatus] = useState(true)
  const [page, setPage] = useState(1);
  const [size, setSize] = useState(10);
  const isLarge = isLargeScreen();


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

              <div className="border border-primary rounded-lg p-5">
                <div className="flex justify-between ">
                  <p className="lg:text-lg md:text-md xs:text-sm font-semibold ">
                    Commission Setting
                  </p>
                  <div className="flex space-x-2">
                    <CommonButton text={"Reset"} className="bg-[#E7E9E2] hover:bg-[#eaf9c4]" />
                    <CommonButton
                      text={"Save Changes"}
                      className="bg-primary hover:bg-secondary"
                    />
                  </div>
                </div>
                <div className="mt-4  grid lg:grid-cols-2 xs:grid-cols-1 gap-5 ">
                  <CommonSelect
                    width={270}
                    label="Commision for"
                    labelId={"commision-label"}
                    id={"commision-label-id"}
                    options={commisions}
                    value={commisionspace}
                    setSelect={setCommisionSpace}
                  />

                  <CommonSelect
                    width={270}
                    label="Commision %"
                    labelId={"commision-percent-label"}
                    id={"commision-percent-label-id"}
                    options={commisionPercent}
                    value={parcentspace}
                    setSelect={setCommisionPercent}
                  />
                </div>
                <div className="mt-5 mb-5  grid lg:grid-cols-2 xs:grid-cols-1 gap-5 ">
                  <CommonSelect
                    width={270}
                    label="Commision for"
                    labelId={"commision-label"}
                    id={"commision-label-id"}
                    options={commisions}
                    value={commisionrenter}
                    setSelect={setCommisionRenter}
                  />

                  <CommonSelect
                    width={270}
                    label="Commision %"
                    labelId={"commision-label"}
                    id={"commision-label-id"}
                    options={commisionPercent}
                    value={parcentrenter}
                    setSelect={setCommisionPercentRent}
                  />
                </div>
              </div>

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


            <div className="">
              {/* Condition for renter and space owner  */}
              <div className="border border-primary rounded-lg p-5 bg-white">
                <div className="flex justify-between ">
                  <p className="lg:text-lg md:text-md xs:text-sm font-semibold ">
                    Condition for renter and space owner
                  </p>
                </div>
                <div className="mt-4 pb-3 ">
                  <DefaultTable
                    
                    isLoading={false}
                    headings={conditionHeadings}
                    data={controlData}
                    disablePagination={true}
                    size={size}
                    setSize={setSize}
                    page={page}
                    setPage={setPage}
                    actionIcons={conditionActions}
                  />
                </div>
              </div>

              {/* Add New Condition  */}
              <div className="border border-primary rounded-lg p-5 bg-white mt-5">
                <div className="flex justify-between ">
                  <p className="lg:text-lg md:text-md xs:text-sm font-semibold ">
                   Add new condition
                  </p>
                </div>
                <div className="mt-4 pb-3 ">
                  <CommonInputText label={"Condition Name"} placeholder={"Type here"} className="lg:w-[400px] md:w-[350px] xs:w-full "/>
                 
                  <CommonInputText label={"Checkbox text"} placeholder={"Type here"} className="lg:w-[400px] md:w-[350px] xs:w-full "/>
                  <CommonInputText textformat="rich" label={"Content"} placeholder={"Type here"} className="lg:w-[400px] md:w-[350px] xs:w-full "/>
                  <CommonSelect
                    width = {isLarge ? 400 : 330}
                    label="Status"
                    labelId={"status-label"}
                    id={"status-label-id"}
                    options={Status}
                    value={status}
                    setSelect={setStatus}
                  />
                  
                </div>
                <div className="flex justify-end space-x-2 mt-5">
                <CommonButton text={"Reset"} className="bg-[#E7E9E2] hover:bg-[#eaf9c4]" />
                    <CommonButton
                      text={"Save Changes"}
                      className="bg-primary hover:bg-secondary"
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
