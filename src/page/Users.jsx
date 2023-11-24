//External Import
import React, { Fragment, useEffect, useState } from "react";
import { Box, Breadcrumbs } from "@mui/material";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

//Internal Import
import PackageBreadcrumb from "../components/common/PackageBreadcrumb";
import UserService from "../service/UserService";
import { FaUserAlt } from "react-icons/fa";
import { toast } from "react-toastify";

import CommonSelect from "../components/ui/CommonSelect";
import DefaultTable from "../components/common/DefaultTable";
import userData from "../constants/Data/dashboardData";
import { userHeading } from "../constants/TableColumns/userHeadings";
import { months } from "../constants/Data/constantsData";
import CustomSearchField from "../components/common/SearchField";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { getCurrentMonth } from "../utils/CommonFunction";

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <p>{children}</p>
        </Box>
      )}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const Users = () => {
  
  const [page, setPage] = useState(1);
  const [size, setSize] = useState(10);
  const [value, setValue] = React.useState(0);
  const currentMonth = getCurrentMonth(); 

  const [selectedOption, setSelectedOption] = useState(currentMonth);
 

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  
  return (
    <Fragment>
      <div>
        <PackageBreadcrumb>
          <Breadcrumbs aria-label="breadcrumb">
            <Link underline="hover" color="grey" href="/">
              <Box sx={{ justifyContent: "center", display: "flex" }}>
                <FaUserAlt size={23} className="min-w-max text-emerald-500" />
                &nbsp; Users
              </Box>
            </Link>
          </Breadcrumbs>
        </PackageBreadcrumb>

        <div className="">
          <div className="flex justify-between ">
            <div className="p-1 text-lg font-semibold font-sanse">
              <CustomSearchField />
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
                  value={value}
                  onChange={handleChange}
                  aria-label="basic tabs example"
                >
                  <Tab label="All" {...a11yProps(0)} />
                  <Tab label="Space Owners" {...a11yProps(1)} />
                  <Tab label="Rental Users" {...a11yProps(2)} />
                </Tabs>
              </Box>
              <CustomTabPanel value={value} index={0}>
                <DefaultTable
                  isLoading={false}
                  headings={userHeading}
                  data={userData?.spaceOwners}
                  disablePagination={false}
                  size={size}
                  setSize={setSize}
                  page={page}
                  setPage={setPage}
                />
              </CustomTabPanel>
              <CustomTabPanel value={value} index={1}>
                <DefaultTable
                  isLoading={false}
                  headings={userHeading}
                  data={userData?.spaceOwners}
                  disablePagination={false}
                  size={size}
                  setSize={setSize}
                  page={page}
                  setPage={setPage}
                />
              </CustomTabPanel>
              <CustomTabPanel value={value} index={2}>
                <DefaultTable
                  isLoading={false}
                  headings={userHeading}
                  data={userData?.rentalUsers}
                  disablePagination={false}
                  size={size}
                  setSize={setSize}
                  page={page}
                  setPage={setPage}
                />
              </CustomTabPanel>
            </Box>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Users;
