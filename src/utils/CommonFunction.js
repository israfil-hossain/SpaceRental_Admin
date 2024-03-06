import { useMediaQuery, useTheme } from "@mui/material";
import moment from "moment";
import { months } from "../constants/Data/constantsData";

const getCurrentMonth = () => {
  let currentDate = new Date();
  let currentMonthIndex = currentDate.getMonth();
  let currentMonthName = months[currentMonthIndex];

  return currentMonthName.value;
};

const isLargeScreen = () => {
  let theme = useTheme();
  let isLargeScreen = useMediaQuery(theme.breakpoints.up("lg"));
  return isLargeScreen;
};

const formatDateString = (date) => {
  return !!date ? moment(date).format("DD MMM, YYYY") : "";
};

export const convertToTitleCase = (str = "") => {
  if (typeof str !== "string") return str;

  return str
    .toLowerCase()
    .replace(/(?:^|_)([a-z])/g, (_, group) => ` ${group.toUpperCase()}`)
    .replace(/_/g, " ");
};
export function spliceString(str,number) {
  if (str?.length > number) {
    const truncatedString = str.substring(0, number) + '...';
    return truncatedString;
  }
  return str;
}

export { formatDateString, getCurrentMonth, isLargeScreen };
