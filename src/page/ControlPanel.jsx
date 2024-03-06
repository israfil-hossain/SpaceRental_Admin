//External Import
import { Box, Breadcrumbs } from "@mui/material";
import React, { Fragment, useState } from "react";
import { Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { toast } from "react-toastify";

//icons
import { AiOutlineControl } from "react-icons/ai";
import { MdAdd, MdDelete, MdModeEditOutline } from "react-icons/md";

//Internal Imports
import DefaultTable from "../components/common/DefaultTable";
import PackageBreadcrumb from "../components/common/PackageBreadcrumb";
import permissionActions from "../constants/Actions/PermissionsActions";
import {
  Status,
  commisionPercent,
  commisions,
} from "../constants/Data/constantsData";
import userData from "../constants/Data/dashboardData";

//Headings ...
import {
  conditionHeadings,
  permissionHeadings,
} from "../constants/TableColumns/headings";
import { isLargeScreen } from "../utils/CommonFunction";

//ui imports
import { CommonButton, CommonSelect } from "../components/common/ui";

//hooks and API endpoints
import { API } from "../api/endpoints";
import useDelete from "../hooks/useDelete";
import { deleteConfirmation } from "../components/common/Toast/DeleteConfirmation";
import AddCondition from "../components/ControlPanel/AddCondition";
import AddSpaceType from "../components/ControlPanel/AddSpacetype";

const ControlPanel = () => {
  const [commisionspace, setCommisionSpace] = useState("space-owner");
  const [parcentspace, setCommisionPercent] = useState(1);
  const [commisionrenter, setCommisionRenter] = useState("rental-owner");
  const [parcentrenter, setCommisionPercentRent] = useState(1);
  const [page, setPage] = useState(1);
  const [size, setSize] = useState(10);
  const [conditionData, setConditionData] = useState("");
  const [spaceTypeData, setSpaceTypeData] = useState("");
  const [open, setOpen] = useState(false);
  const [spaceOpen, setSpaceOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setConditionData("");
    setOpen(false);
  };
  const handleSpaceOpen = () => {
    setSpaceOpen(true);
  };
  const handleSpaceClose = () => {
    setSpaceOpen(false);
    setSpaceTypeData("");
  };
  const handleSpaceEdit = (item) => {
    console.log({item});
    setSpaceTypeData(item);
    handleSpaceOpen();
  };

  //Space API
  const spaceTypeAPI = API.GetSpaceType;
  const {
    data: allSpaceType = {},
    isLoading: allSpaceTypeLoading,
    refetch: spaceTypeRefatch,
  } = useQuery([spaceTypeAPI]);
  console.log("AllTypeSpace", allSpaceType?.data);

  const PermissionDeleteEndpoint = API.DeleteStorageCondition;

  // get Permission Data ....
  const {
    data: getPermissions = {},
    isLoading: PermissionLoading,
    refetch,
  } = useQuery([API.GetStorageCondition]);

  const {
    data: getConditionData = {},
    isLoading: getConditionLoading,
    refetch : getConditionRefatch,
  } = useQuery([API.GetAllTermsAndCondition]);

  // Delte Mutation ....
  const deleteMutation = useDelete({
    endpoint: PermissionDeleteEndpoint, // Replace with your actual API endpoint
    onSuccess: () => {
      console.log("Delete successful!");
      toast.success("Delete successful! !");
      refetch();
    },
    onError: (error) => {
      console.error("Error deleting entry:", error);
      // Add any other error handling logic
    },
  });

  const handleEdit = (item) => {
    setConditionData(item);
    handleOpen();
  };

  const handleDelete = (item) => {
    if (item?._id) {
      deleteConfirmation().then((result) => {
        if (result.isConfirmed) {
          deleteMutation.mutate(item?._id);
        }
      });
    }
  };

  const conditionActions = [
    {
      icon: <MdModeEditOutline color="white" size={16} />,
      tooltip: "Edit",
      handler: handleEdit,
      bgColor: "bg-blue-500",
      hoverColor: "hover:bg-blue-700",
    },
    {
      icon: <MdDelete color="white" size={16} />,
      tooltip: "Delete",
      handler: handleDelete,
      bgColor: "bg-red-500",
      hoverColor: "hover:bg-red-700",
    },
  ];

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
                    <CommonButton
                      type="reset"
                      text={"Reset"}
                      className="bg-[#E7E9E2] hover:bg-[#eaf9c4]"
                    />
                    <CommonButton
                      type="submit"
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

              {/* Space Type  Management .........*/}

              <div className="border border-primary rounded-lg p-5 bg-white mt-5">
                <div className="flex justify-between ">
                  <p className="lg:text-lg md:text-md xs:text-sm font-semibold ">
                    Spaces Types Management
                  </p>
                  <CommonButton
                    text="Add"
                    className="bg-primary hover:bg-secondary text-gray-200 self-end"
                    icon={<MdAdd />}
                    onClick={handleSpaceOpen}
                  />
                </div>
                <div className="grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 mt-5 w-full gap-2 ">
                  {allSpaceType?.data?.length > 0 &&
                    allSpaceType?.data?.map((item, index) => (
                      <div
                        key={index}
                        className="bg-gray-300 rounded-xl px-5 py-4 mx-2 space-x-2 gap-3 font-medium text-[16px] font-sans cursor-pointer"
                        onClick={()=>handleSpaceEdit(item)}
                        
                      >
                        <div className="flex justify-between items-center ">
                          <p>{item.name}</p>
                          <p>$ {item.pricePerMonth}</p>
                        </div>
                      </div>
                    ))}
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
                  <CommonButton
                    text="Add"
                    className="bg-primary hover:bg-secondary text-gray-200"
                    icon={<MdAdd />}
                    onClick={handleOpen}
                  />
                </div>
                <div className="mt-4 pb-3 ">
                  <DefaultTable
                    isLoading={getConditionLoading}
                    headings={conditionHeadings}
                    data={getConditionData?.data}
                    disablePagination={true}
                    size={size}
                    setSize={setSize}
                    page={page}
                    setPage={setPage}
                    actionIcons={conditionActions}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Add New Condition  */}
        <AddCondition
          open={open}
          onClose={handleClose}
          refetch={getConditionRefatch}
          data={conditionData}
        />
        {/* Add SpaceType */}
        <AddSpaceType
          open={spaceOpen}
          onClose={handleSpaceClose}
          refetch={spaceTypeRefatch}
          data={spaceTypeData}
        />
      </div>
    </Fragment>
  );
};

export default ControlPanel;
