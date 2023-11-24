import { months } from "../constants/Data/constantsData";
import {useMediaQuery, useTheme } from "@mui/material";

const getCurrentMonth = () => {
  let currentDate = new Date();
  let currentMonthIndex = currentDate.getMonth();
  let currentMonthName = months[currentMonthIndex];

  return currentMonthName.value;
};

const isLargeScreen =()=>{
    let theme = useTheme();
    let isLargeScreen = useMediaQuery(theme.breakpoints.up('lg'));
    return isLargeScreen;
    
}



export { getCurrentMonth,isLargeScreen };
