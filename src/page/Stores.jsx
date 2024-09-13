//External Import
import { Box, Breadcrumbs, CircularProgress, Pagination } from "@mui/material";
import React, { Fragment, useState } from "react";
import { Link } from "react-router-dom";

//Internal Import
import PackageBreadcrumb from "../components/common/PackageBreadcrumb";

import { RiStore2Line } from "react-icons/ri";
import CustomSearchField from "../components/common/SearchField";
import StoreCard from "../components/common/StoreCard";

import { months } from "../constants/Data/constantsData";
import { getCurrentMonth } from "../utils/CommonFunction";
import { CommonSelect } from "../components/common/ui";
import { useQuery } from "@tanstack/react-query";
import { API } from "../api/endpoints";
import { CommonProgress } from "../components/common/CommonProgress";

const Stores = () => {
  const [page, setPage] = useState(1);
  const [size, setSize] = useState(10);
  const [name, setName] = useState("");

  const currentMonth = getCurrentMonth();
  const [selectedOption, setSelectedOption] = useState(currentMonth);
  
  const { data: allspace = {}, isLoading: spaceLoading } = useQuery([
    `${API.GetSpaceForRent}?Page=${page}&PageSize=${size}&Name=${name}`,
  ]);

  const handlePageChange = (event, value) => {
    setPage(value); // Update page when user selects a different page
  };

  return (
    <Fragment>
      {
        spaceLoading ? <CommonProgress />  : 
      <div>
        <PackageBreadcrumb>
          <Breadcrumbs aria-label="breadcrumb">
            <Link underline="hover" color="grey" href="/category">
              <Box sx={{ justifyContent: "center", display: "flex" }}>
                <RiStore2Line size={23} className="min-w-max text-primary" />
                <span className="text-primary ">&nbsp;Stores </span>
              </Box>
            </Link>
          </Breadcrumbs>
        </PackageBreadcrumb>
        <div className="flex justify-between ">
          <div className="p-1 text-lg font-semibold font-sanse">
          <CustomSearchField name={name} onChange={setName} />
          </div>
          {/* <div className="p-1">
            <CommonSelect
              labelId={"months-select"}
              id={"months-select-id"}
              options={months}
              value={selectedOption}
              setSelect={setSelectedOption}
            />
          </div> */}
        </div>

        <div className="grid lg:grid-cols-3  gap-5 md:grid-cols-2  grid-cols-1 mt-5">
          {
            allspace?.data?.map((data,id)=>(
              <StoreCard data={data} key={id}/>
            ))
          }
        </div>
        <div className="flex justify-center mt-5">
          <Pagination
            count={allspace?.totalPages} // Total number of pages
            page={page} // Current page
            onChange={handlePageChange} // Handle page change
            color="primary"
            shape="rounded"
          />
        </div>
      </div>
    }
    </Fragment>
  );
};

export default Stores;
