import { motion } from "framer-motion";
import { useContext, useEffect, useRef, useState } from "react";
import { useMediaQuery } from "react-responsive";
import { Link, NavLink, useLocation } from "react-router-dom";
import { MenuContext } from "../../../context/MenuContext";
import { FaCalendarAlt, FaCar } from "react-icons/fa";
import { useQueryClient } from "@tanstack/react-query";
import { AiOutlineAppstore, AiOutlineControl } from "react-icons/ai";
import { BsPerson } from "react-icons/bs";
import { FiLogOut } from "react-icons/fi";
import {
  MdContactSupport,
  MdMenu,
  MdOutlinePayments,
  MdSecurity,
  MdStorage,
} from "react-icons/md";
import { PiUsersThreeLight } from "react-icons/pi";
import { RiStore2Line } from "react-icons/ri";
import { logo, profile } from "../../../assets";
import { useAuthUserContext } from "../../../context/AuthUserProvider";
import { convertToTitleCase } from "../../../utils/CommonFunction";
import { removeTokens } from "../../../utils/localStorageUtils";
import CommonTooltip from "../../common/CommonTooltip";
import { IoAccessibility, IoMoveSharp } from "react-icons/io5";

const Sidebar = () => {
  let isTabletMid = useMediaQuery({ query: "(max-width: 768px)" });
  const { isOpen, toggleMenu } = useContext(MenuContext);
  const [open, setOpen] = useState(isTabletMid ? false : true);
  const sidebarRef = useRef();
  const { pathname } = useLocation();
  const { userData } = useAuthUserContext();
  const queryClient = useQueryClient();

  useEffect(() => {
    if (isTabletMid) {
      setOpen(false);
    } else {
      setOpen(true);
    }
  }, [isTabletMid]);

  useEffect(() => {
    isTabletMid && setOpen(false);
  }, [isTabletMid, pathname]);

  const location = useLocation();

  const Nav_animation = isTabletMid
    ? {
        open: {
          x: 0,
          width: "16rem",
          transition: {
            damping: 40,
          },
        },
        closed: {
          x: -250,
          width: 0,
          transition: {
            damping: 40,
            delay: 0.15,
          },
        },
      }
    : {
        open: {
          width: "16rem",
          transition: {
            damping: 40,
          },
        },
        closed: {
          width: "4rem",
          transition: {
            damping: 40,
          },
        },
      };

  const handleUserLogout = () => {
    removeTokens();
    queryClient.resetQueries();
    navigate("/login");
  };

  return (
    <>
      <div
        onClick={toggleMenu}
        className={`md:hidden fixed inset-0 min-h-screen z-[998] bg-transparent ${
          isOpen ? "block" : "hidden"
        } `}
      ></div>

      <motion.div
        ref={sidebarRef}
        variants={Nav_animation}
        initial={{ x: isTabletMid ? -250 : 0 }}
        animate={isOpen ? "open" : "closed"}
        className=" bg-purple-200  text-[#f5f7fa] shadow-xl z-[999] max-w-[16rem]  w-[16rem] 
          md:relative fixed mt-5 ml-5 rounded-l-xl  rounded-b-xl h-[95%] overflow-y-auto 
          scrollbar-thin scrollbar-track-white scrollbar-thumb-slate-100
       "
      >
        <Link to="/">
          <div className="flex items-center gap-2.5 font-medium border-b py-3 border-slate-300  mx-3 z-50 h-[12%]">
            <img src={logo} alt="logo" />
          </div>
        </Link>

        <div className="flex flex-col bg-gray-800  justify-between h-[88%] overflow-y-auto">
          <ul className="whitespace-pre px-2.5 text-[0.9rem] py-5 flex flex-col gap-1  font-medium overflow-x-hidden no-scrollbar ">
            <li>
              <CommonTooltip text={"Dashboard"}>
                <NavLink to={"/"} className="link text-white  font-sans">
                  <AiOutlineAppstore
                    size={23}
                    className="min-w-max text-white"
                  />
                  Dashboard
                </NavLink>
              </CommonTooltip>
            </li>

            <li>
              <NavLink to={"/users"} className="link text-white  font-sans">
                <PiUsersThreeLight size={23} className="min-w-max text-white" />
                Users
              </NavLink>
            </li>

            <li>
              <NavLink to={"/stores"} className="link text-white  font-sans">
                <RiStore2Line
                  size={23}
                  className="min-w-max active:text-black text-white"
                />
                Stores
              </NavLink>
            </li>

            <li>
              <NavLink to={"/earnings"} className="link text-white  font-sans">
                <MdOutlinePayments
                  size={23}
                  className="min-w-max active:text-black text-white"
                />
                Earnings
              </NavLink>
            </li>

            <li>
              <NavLink
                to={"/control-panel"}
                className="link text-white  font-sans"
              >
                <AiOutlineControl
                  size={23}
                  className="min-w-max active:text-black  text-white "
                />
                Control Panel
              </NavLink>
            </li>
            <li>
              <NavLink to={"/security"} className="link text-white  font-sans">
                <MdSecurity
                  size={23}
                  className="min-w-max active:text-black  text-white "
                />
                Security
              </NavLink>
            </li>
            <li>
              <NavLink
                to={"/access-method"}
                className="link text-white  font-sans"
              >
                <IoAccessibility
                  size={23}
                  className="min-w-max active:text-black  text-white "
                />
                Access Method
              </NavLink>
            </li>
            <li>
              <NavLink
                to={"/storage-condition"}
                className="link text-white  font-sans"
              >
                <MdStorage
                  size={23}
                  className="min-w-max active:text-black  text-white "
                />
                Storage
              </NavLink>
            </li>

            <li>
              <NavLink
                to={"/unload-move"}
                className="link text-white font-sans"
              >
                <IoMoveSharp
                  size={23}
                  className="min-w-max active:text-black  text-white "
                />
                Unload Move
              </NavLink>
            </li>
            <li>
              <NavLink to={"/schedule"} className="link text-white font-sans">
                <FaCalendarAlt
                  size={23}
                  className="min-w-max active:text-black  text-white "
                />
                Schedule
              </NavLink>
            </li>
            <li>
              <NavLink to={"/profile"} className="link text-white  font-sans">
                <BsPerson
                  size={23}
                  className="min-w-max active:text-black active:bg-black text-white "
                />
                Profile
              </NavLink>
            </li>
            <li>
              <NavLink to={"/transport"} className="link text-white  font-sans">
                <FaCar
                  size={23}
                  className="min-w-max active:text-black active:bg-black text-white "
                />
                Transport
              </NavLink>
            </li>
          </ul>

          <div
            className={`pb-5 rounded-b-lg   ${
              isOpen ? "flex" : "flex-col space-y-4"
            } p-3 items-center `}
          >
            <img src={profile} alt="profile" />
            <div className="flex-grow">
              <div
                className={` ${
                  isOpen ? "block" : "hidden"
                } flex flex-col items-start px-2`}
              >
                <h2 className="text-[14px]">
                  {userData?.fullName || "Admin User"}
                </h2>
                <p className="text-[10px]">
                  {convertToTitleCase(userData?.role || "")}
                </p>
              </div>
            </div>
            <button
              className="rounded-full p-2 bg-[#B3FAFF]"
              onClick={handleUserLogout}
            >
              <FiLogOut className=" text-black min-w-max" />
            </button>
          </div>
        </div>
      </motion.div>
      <div
        className="w-8 h-8 bg-gray-700  mt-5 flex p-2 rounded-r-md mr-3 focus:bg-gray-400 hover:bg-gray-900 shadow-md  "
        onClick={toggleMenu}
      >
        {" "}
        <MdMenu className="text-white" />
      </div>
    </>
  );
};

export default Sidebar;
