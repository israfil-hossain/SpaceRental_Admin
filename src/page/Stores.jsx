//External Import
import { Box, Breadcrumbs, TablePagination } from "@mui/material";
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
import CommonPagination from "../components/common/CommonPagination";
import { CommonProgress } from "../components/common/CommonProgress";

const Stores = () => {
  const currentMonth = getCurrentMonth();
  const [page, setPage] = useState(1);
  const [size, setSize] = useState(10);

  const [selectedOption, setSelectedOption] = useState(currentMonth);

  const storeAPI = API.GetSpaceForRent + `?Page=${page}&PageSize=${size}`;
  const { data: allStores = {}, isLoading: allStoresLoading } = useQuery([
    storeAPI,
  ]);

  console.log("storeAPI", allStores);
  if(allStoresLoading){
    return(
      <CommonProgress/>
    )
  }
  return (
    <Fragment>
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

        <div className="flex flex-wrap items-center ">
        {
          allStores?.data?.length > 0 && allStores?.data?.map((item,index)=>(
            <div key={index} className="m-4">
            <StoreCard data={item} />
            </div>
          ))
        }
          
        </div>

        
          
          <CommonPagination
            size={size}
            setSize={setSize}
            page={page}
            setPage={setPage}
            count={allStores?.totalRecords}
          />
        
      </div>
    </Fragment>
  );
};

export default Stores;
