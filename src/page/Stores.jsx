//External Import
import React, { Fragment, useEffect, useState } from "react";
import { Box, Breadcrumbs } from "@mui/material";
import { Link } from "react-router-dom";

//Internal Import
import PackageBreadcrumb from "../components/common/PackageBreadcrumb";

import QuizService from "../service/QuizService";
import UserService from "../service/UserService";
import { CommonProgress } from "../components/common/CommonProgress";
import ShuffleArray from "../constants/ShuffleArray";
import CustomSearchField from "../components/common/SearchField";
import CommonSelect from "../components/ui/CommonSelect";
import { months } from "../constants/Data/constantsData";
import { RiStore2Line } from "react-icons/ri";
import StoreCard from "../components/common/StoreCard";
import { getCurrentMonth } from "../utils/CommonFunction";

const Stores = () => {
  const currentMonth = getCurrentMonth(); 
  const [data, setData] = useState([]);
  const [userType, setUserType] = useState("");
  const id = localStorage.getItem("userid");
  const [isLoading, setIsLoading] = useState(true);
  const [selectedOption, setSelectedOption] = useState(currentMonth);

 

  // Fetch User Data
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await QuizService.getQuiz();
        const suffleData = ShuffleArray(res.data);
        setData(suffleData);
        setIsLoading(false); // After fetching data, set isLoading to false
      } catch (error) {
        // Handle any error that might occur during data fetching
        console.error("Error fetching data:", error);
        setIsLoading(false); // Set isLoading to false even if there's an error
      }
    };

    const getUserData = async () => {
      try {
        const res = await UserService.getSingleUser(id);
        setUserType(res?.data?.usertype);
      } catch (error) {
        // Handle any error that might occur while fetching user data
        console.error("Error fetching user data:", error);
      }
    };

    getUserData(id);
    fetchData();
  }, [id]);

  return (
    <Fragment>
      <div>
        <PackageBreadcrumb>
          <Breadcrumbs aria-label="breadcrumb">
            <Link underline="hover" color="grey" href="/category">
              <Box sx={{ justifyContent: "center", display: "flex" }}>
                <RiStore2Line
                  size={23}
                  className="min-w-max text-primary"
                />
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

        <div className="grid lg:grid-cols-3 gap-5 md:grid-cols-2  grid-cols-1 mt-5">
          <StoreCard />
          <StoreCard />
          <StoreCard />
          <StoreCard />
        </div>

        {/* {isLoading ? (
          <div>
            <CommonProgress />
          </div>
        ) : (
          <div className="grid lg:grid-cols-5 gap-5 md:grid-cols-2 sm:grid-cols-2 xs:grid-cols-2 mt-5">
            {data.map((quiz, i) => (
              <Card
                key={i}
                title={quiz?.quiz_name}
                number={""}
                image={quiz?.image}
                title2={"Question"}
                link={`/questions?id=${quiz?.quiz_name}`}
                disabled={
                  quiz?.accessibility === "paid" && userType === "unpaid"
                }
              />
            ))}
          </div>
        )} */}
      </div>
    </Fragment>
  );
};

export default Stores;
