import { useState } from "react";
import { motion } from "framer-motion";
import { IoIosArrowDown } from "react-icons/io";
import { NavLink, useLocation } from "react-router-dom";

const Submenu = ({ data }) => {
  const { pathname } = useLocation();
  const [subMenuOpen, setSubMenuOpen] = useState(false);
  return (
    <>
      <li
        // className={`link ${pathname.includes(data.name) && "text-green-600"}`}
        onClick={() => setSubMenuOpen(!subMenuOpen)}
      >
        <NavLink to={data.link} className="link text-white  font-sans">
          <data.icon
            size={23}
            className="min-w-max active:text-black text-white"
          />
          <p className="flex-1 capitalize text-[13px]">{data.name}</p>
          <IoIosArrowDown
          size={20}
            className={` ${subMenuOpen && "rotate-180"} duration-200 `}
          />
        </NavLink>
      </li>
      <motion.ul
        animate={
          subMenuOpen
            ? {
                height: "fit-content",
              }
            : {
                height: 0,
              }
        }
        className={`${subMenuOpen ? " ml-2 border-dotted h-96 overflow-x-hidden scrollbar-thin scrollbar-track-black scrollbar-thumb-primary " : "overflow-hidden"} flex  flex-col  font-normal `}
      >
        {data.menus?.map((data, id) => (
          <li key={id}>
            {/* className="hover:text-blue-600 hover:font-medium" */}
            <NavLink
              to={data?.link}
              className={({ isActive }) =>
                isActive ? "sublink active  font-sans capitalize ml-2" : "sublink  font-sans capitalize ml-2"
              }
             
            >
              <data.icon
                size={18}
                className="min-w-max active:text-primary text-white"
              />
              <p className="flex-1 capitalize text-[13px] active:text-primary">{data.name}</p>
            </NavLink>
          </li>
        ))}
      </motion.ul>
    </>
  );
};

export default Submenu;
