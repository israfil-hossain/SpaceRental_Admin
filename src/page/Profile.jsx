//External Import
import React, { Fragment, useEffect, useState } from "react";
import { Box, Breadcrumbs } from "@mui/material";
import { Link } from "react-router-dom";

//Internal Import
import PackageBreadcrumb from "../components/common/PackageBreadcrumb";
import UserService from "../service/UserService";

import { FaEye, FaEyeSlash, FaUserAlt } from "react-icons/fa";
import { BiEdit, BiLockAlt } from "react-icons/bi";
import { MdEdit } from "react-icons/md";
import { toast } from "react-toastify";
import { HiOutlineKey } from "react-icons/hi";

import AddUser from "../components/Users/AddUser";
import ChangePassword from "../components/Users/ChangePassword";
import { ErrorMessage, Field, Form, Formik } from "formik";
import passwordValidationSchema from "../utils/validation/passwordValidation";
import CommonButton from "../components/ui/CommonButton";

const Profile = () => {
  const userid = localStorage.getItem("userid");

  const [selectedImage, setSelectedImage] = useState(null);
  const [data, setData] = useState([]);

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [popen, setPopen] = useState(true);
  const handlePOpen = () => setPopen(true);
  const handlePClose = () => setPopen(false);
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);


  const togglePasswordVisibility = () => {
    setShowPassword((prevState) => !prevState);
  };

  // Define the fetchData function outside the useEffect hook
  const fetchData = async (userId) => {
    try {
      const res = await UserService.getSingleUser(userId);
      return res.data;
    } catch (error) {
      // Handle the error here, e.g., log the error or show a user-friendly message.
      console.error("Error fetching user data:", error);
      throw error; // Re-throw the error to allow the caller to handle it if needed.
    }
  };

  // Inside your functional component
  useEffect(() => {
    const getUserData = async () => {
      try {
        const userData = await fetchData(userid);
        setData(userData);
      } catch (error) {
        // Handle the error here or display an error message to the user.
      }
    };

    getUserData(); // Call the function to fetch and update user data
  }, [userid]);

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    setSelectedImage(URL.createObjectURL(file));
    uploadImage(file);
  };
  const uploadImage = async (file) => {
    try {
      const formData = new FormData();
      formData.append("image", file);

      // Replace 'PUT_API_ENDPOINT' with the actual API endpoint URL for image upload
      await UserService.UploadImage(data?._id, formData);
      toast.success("Profile Image Upload Successfully");
    } catch (error) {
      console.error("Error uploading image:", error);
    }
  };

  return (
    <Fragment>
      <div>
        <PackageBreadcrumb>
          <Breadcrumbs aria-label="breadcrumb">
            <Link underline="hover" color="grey" href="/">
              <Box sx={{ justifyContent: "center", display: "flex" }}>
                <FaUserAlt size={23} className="min-w-max text-emerald-500" />
                &nbsp; Profile
              </Box>
            </Link>
          </Breadcrumbs>
        </PackageBreadcrumb>

        <div className="mt-10">
          <div className="lg:flex  justify-around  space-x-5 rounded-md px-4 py-4 w-full ">
            {/* <div className="lg:flex hidden">
              <img src={Profile} alt="profile" width={500} height={100} />
            </div> */}
            <div className="lg:w-1/2 rounded-xl px-4 py-4 bg-white">
              <div className="w-full">
                <MdEdit
                  className="cursor-pointer w-10 h-10 rounded-full bg-primary hover:bg-[#bbbd53] px-2 py-2 text-white mr-2 float-right"
                  onClick={handleOpen}
                />
              </div>
              <div className="text-xl text-gray-800 font-semibold font-sans p-4 mb-5">
                Personal Information
              </div>
              <div className="lg:flex space-x-4">
                <div className=" px-4   w-full ">
                  <div className="py-3 mb-5 flex items-center border bg-gray-200 rounded-lg space-x-3 px-3 font-semibold  text-gray-700 font-sans text-lg">
                    <p>Name :</p>
                    <span className="  ">{data?.name}</span>
                  </div>

                  <div className="py-3 mb-5 flex items-center border bg-gray-200 rounded-lg space-x-3 px-3 font-semibold  font-sans text-lg">
                    <p>Email :</p>
                    <span className=" ">{data?.email}</span>
                  </div>

                  <div className="py-3 flex border bg-gray-200 rounded-lg space-x-3 px-3 font-semibold  font-sans text-lg">
                    <p>Address :</p>
                    <span className="">{data?.mobile}</span>
                  </div>
                </div>

                <div className="py-4 flex justify-center items-center relative">
                  {selectedImage ? (
                    <img
                      src={selectedImage}
                      alt="profileImage"
                      className="w-48 h-48 rounded-full border border-emerald-500"
                    />
                  ) : (
                    <div className="w-48 h-48 rounded-full border border-emerald-500 bg-gray-200 flex justify-center items-center">
                      <img
                        src={
                          data?.profile
                            ? data?.profile
                            : "https://res.cloudinary.com/dpc1nydxn/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max,bo_5px_solid_red,b_rgb:262c35/v1685778058/Flowentech/about2_ap8hdw.jpg"
                        }
                        alt="profileImage"
                        className="w-48 h-48 rounded-full border border-emerald-500"
                      />
                    </div>
                  )}
                  <div className="flex space-x-2 text-sm mt-0">
                    <label htmlFor="imageUpload">
                      <BiEdit className="text-[#2c858d] w-8 h-8 -ml-4 cursor-pointer" />
                    </label>
                    <input
                      id="imageUpload"
                      type="file"
                      accept="image/*"
                      className="hidden"
                      onChange={handleImageUpload}
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:w-1/2 rounded-xl px-4 py-4 bg-white">

            <div>
            <Formik
              initialValues={{
                password:"",
              }}
              validationSchema={passwordValidationSchema}
              // onSubmit={data ? handleUpdate : handleSubmit}
            >
              {({
                values,
                handleChange,
                errors,
                touched,
                isSubmitting,
                resetForm,
              }) => (
                <Form>
                  {/* <>{JSON.stringify(values)}</> */}
                  <Box
                    sx={{
                      pb: 0,
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "space-between",
                    }}
                  >
                    <p >
                      Changes Password
                    </p>
                    {/* <div style={{}}>
                      <IconButton
                        aria-label="edit"
                        onClick={() => handleResetAndClose(resetForm)}
                      >
                        <AiOutlineCloseCircle
                          sx={{
                            color: "#ff4a68",
                            height: "22px",
                            width: "22px",
                          }}
                          className="text-red-400 hover:text-600"
                        />
                      </IconButton>
                    </div> */}
                  </Box>
                  {/* <Divider sx={{ mb: 2 }}>
                    <Chip label="Password" />
                  </Divider> */}
                  
                    <div className="mt-5 px-5">
                      <label
                        htmlFor="password"
                        className="block text-sm font-medium text-gray-700"
                      >
                       Old Password
                      </label>
                      <div className="mt-1">
                        <div className="relative">
                          <Field
                            // type={showPassword ? "text" : "password"}
                            name="password"
                            id="password"
                            placeholder="Enter Old Password"
                            autoComplete="current-password"
                            value={values.password}
                            onChange={handleChange}
                            error={touched.password && errors.password}
                            className={`appearance-none block w-full px-3 py-2 border border-gray-300 
                            rounded-xl shadow-sm placeholder-gray-400 
                            focus:ring-yellow-500 focus:border-yellow-500 focus:ring-1 sm:text-sm ${
                        touched.password && errors.password
                          ? "border-red-500"
                          : ""
                      }`}
                          />
                          <button
                            type="button"
                            className="absolute inset-y-0 right-0 flex items-center px-2"
                            onClick={togglePasswordVisibility}
                          >
                            {showPassword ? <FaEyeSlash /> : <FaEye />}
                          </button>
                        </div>
                        <ErrorMessage
                          name="password"
                          component="p"
                          className="mt-2 text-sm text-red-600"
                        />
                      </div>
                    </div>

                    <div className="mt-5 px-5">
                      <label
                        htmlFor="password"
                        className="block text-sm font-medium text-gray-700"
                      >
                       New Password
                      </label>
                      <div className="mt-1">
                        <div className="relative">
                          <Field
                            // type={showPassword ? "text" : "password"}
                            name="password"
                            id="password"
                            placeholder="Enter New Password"
                            autoComplete="current-password"
                            value={values.password}
                            onChange={handleChange}
                            error={touched.password && errors.password}
                            className={`appearance-none block w-full px-3 py-2 border border-gray-300 
                            rounded-xl shadow-sm placeholder-gray-400 
                            focus:ring-yellow-500 focus:border-yellow-500 focus:ring-1 sm:text-sm ${
                        touched.password && errors.password
                          ? "border-red-500"
                          : ""
                      }`}
                          />
                          <button
                            type="button"
                            className="absolute inset-y-0 right-0 flex items-center px-2"
                            onClick={togglePasswordVisibility}
                          >
                            {showPassword ? <FaEyeSlash /> : <FaEye />}
                          </button>
                        </div>
                        <ErrorMessage
                          name="password"
                          component="p"
                          className="mt-2 text-sm text-red-600"
                        />
                      </div>
                    </div>

                    <div className="mt-5 px-5">
                      <label
                        htmlFor="password"
                        className="block text-sm font-medium text-gray-700"
                      >
                       Retype New Password
                      </label>
                      <div className="mt-1">
                        <div className="relative">
                          <Field
                            // type={showPassword ? "text" : "password"}
                            name="password"
                            id="password"
                            placeholder="Retype New Password"
                            autoComplete="current-password"
                            value={values.password}
                            onChange={handleChange}
                            error={touched.password && errors.password}
                            className={`appearance-none block w-full px-3 py-2 border border-gray-300 
                            rounded-xl shadow-sm placeholder-gray-400 
                            focus:ring-yellow-500 focus:border-yellow-500 focus:ring-1 sm:text-sm ${
                        touched.password && errors.password
                          ? "border-red-500"
                          : ""
                      }`}
                          />
                          <button
                            type="button"
                            className="absolute inset-y-0 right-0 flex items-center px-2"
                            onClick={togglePasswordVisibility}
                          >
                            {showPassword ? <FaEyeSlash /> : <FaEye />}
                          </button>
                        </div>
                        <ErrorMessage
                          name="password"
                          component="p"
                          className="mt-2 text-sm text-red-600"
                        />
                      </div>
                    </div>
               

                  <div className="my-8 flex justify-around item-center w-full ">
                    <CommonButton 
                      text="Reset"
                      className="border border-primary hover:bg-gray-100 w-40 flex justify-center items-center"
                    />
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="group relative w-80 flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-primary hover:bg-[#cacc57] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
                    >
                      <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                        {isLoading ? (
                          <Progress />
                        ) : (
                          <BiLockAlt
                            className="h-5 w-5 text-gray-600 group-hover:text-gray-800"
                            aria-hidden="true"
                          />
                        )}
                      </span>
                      Save Changes
                    </button>
                  </div>
                </Form>
              )}
            </Formik>
          </div>
              
            
              
            </div>
          </div>
          
          <AddUser
            data={data}
            open={open}
            onClose={handleClose}
            fetchData={fetchData}
          />
        </div>
      </div>
    </Fragment>
  );
};

export default Profile;
