//External Import
import { Box, Breadcrumbs } from "@mui/material";
import React, { Fragment, useState } from "react";
import { Link } from "react-router-dom";

//Internal Import
import { FaUserAlt } from "react-icons/fa";
import PackageBreadcrumb from "../components/common/PackageBreadcrumb";

import Tab from "@mui/material/Tab";
import Tabs from "@mui/material/Tabs";
import { useQuery } from "@tanstack/react-query";
import DefaultTable from "../components/common/DefaultTable";
import CustomSearchField from "../components/common/SearchField";

import { CommonSelect } from "../components/common/ui";
import { months } from "../constants/Data/constantsData";
import { userHeading } from "../constants/TableColumns/userHeadings";
import { getCurrentMonth } from "../utils/CommonFunction";
import { MdDelete } from "react-icons/md";
import { API } from "../api/endpoints";
import useDelete from "../hooks/useDelete";
import { toast } from "react-toastify";
import { deleteConfirmation } from "../components/common/Toast/DeleteConfirmation";
import dayjs from "dayjs";
const Users = () => {
  const [page, setPage] = useState(1);
  const [size, setSize] = useState(10);
  const [emailSearch, setEmailSearch] = useState("");
  const [roleTab, setRoleTab] = React.useState("");
  const currentMonth = getCurrentMonth();

  const { data: allUsers = {}, isLoading: allUsersLoading } = useQuery([
    `/api/ApplicationUser/GetAll?UserRole=${roleTab}&Page=${page}&PageSize=${size}&Email=${emailSearch}`,
  ]);

  const [selectedOption, setSelectedOption] = useState(currentMonth);

   // Filter users by selected month (dateJoined)
   const filteredUsers = allUsers?.data?.filter((user) => {
    const userJoinMonth = dayjs(user.dateJoined).format('MM'); // Extract the month as 'MM'
    return userJoinMonth === selectedOption; // Compare with selected option (month)
  });
  
  const handleChange = (event, newValue) => {
    setRoleTab(newValue);
  };

   // Delte Mutation ....
   const deleteMutation = useDelete({
    endpoint: API.DeleteUser,
  });
 
  const handleDelete = (item) => {
    if (item?._id) {
      deleteConfirmation().then((result) => {
        if (result.isConfirmed) {
          deleteMutation.mutateAsync(item?._id, {
            onSuccess: () => {
              toast.success("Delete successful!");
              refetch();
            },
            
          });
        }
      });
    }
  };

  const conditionActions = [
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
      <div>
        <PackageBreadcrumb>
          <Breadcrumbs aria-label="breadcrumb">
            <Link underline="hover" color="grey" href="/">
              <Box sx={{ justifyContent: "center", display: "flex" }}>
                <FaUserAlt size={23} className="min-w-max text-primary" />
                &nbsp; Users
              </Box>
            </Link>
          </Breadcrumbs>
        </PackageBreadcrumb>

        <div className="">
          <div className="flex justify-between ">
            <div className="p-1 text-lg font-semibold font-sanse">
              <CustomSearchField name={emailSearch} onChange={setEmailSearch} />
            </div>
            <div className="p-1">
              <CommonSelect
                labelId={"months-select"}
                id={"months-select-id"}
                options={months}
                value={selectedOption}
                setSelect={setSelectedOption}
              />
            </div>
          </div>
          <div className=" border border-primary bg-white rounded-lg p-0">
            <Box sx={{ width: "100%" }}>
              <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
                <Tabs
                  value={roleTab}
                  onChange={handleChange}
                  aria-label="basic tabs example"
                >
                  <Tab label="All" value={""} />
                  <Tab label="Space Owners" value={"OWNER"} />
                  <Tab label="Rental Users" value={"RENTER"} />
                </Tabs>
              </Box>
              <Box sx={{ p: 3 }}>
                <DefaultTable
                  isLoading={allUsersLoading}
                  headings={userHeading}
                  data={allUsers?.data || []}
                  disablePagination={false}
                  size={size}
                  setSize={setSize}
                  page={page}
                  setPage={setPage}
                  actionIcons={conditionActions}
                />
              </Box>
            </Box>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Users;
