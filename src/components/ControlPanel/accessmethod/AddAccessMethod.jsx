import React, { Fragment, useState } from "react";
import { ErrorMessage, Field, Formik, Form } from "formik";
import { toast } from "react-toastify";
import { BiLockAlt } from "react-icons/bi";
import {
  Backdrop,
  Box,
  Chip,
  Divider,
  Fade,
  IconButton,
  Modal,
  Typography,
} from "@mui/material";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { Status } from "../../../constants/Data/constantsData";
import Loader from "../../common/Loader";
import { useCreate, usePatch } from "../../../hooks";
import { CommonButton, CommonInputText, CommonSelect } from "../../common/ui";
import { SpaceAccessApi } from "../../../api/controlapi";
import accessmethodValidation from "./accessValidation";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%,-50%)",
  width: "450px",
  bgcolor: "background.paper",
  border: "2px solid #F7FDFF",
  borderRadius: "10px",
  boxShadow: `3px 2px 3px 1px rgba(0, 0, 0, 0.2)`,
  p: 4,
};
const AddAccessMethod = ({ refetch, open, onClose }) => {
  const [status, setStatus] = useState(true);

  const { mutateAsync: createmutate, isLoading: createLoading } = useCreate({
    endpoint: SpaceAccessApi.SpaceAccessCreate, // Replace with your actual API endpoint
    onSuccess: (data) => {
      toast.success("Add Access Method Successfully !");
      refetch();
      onClose();
    },
    onError: (error) => {
      // Handle update error, e.g., display an error message
      console.error("Update failed", error);
      toast.error("Something went wrong !");
    },
  });
  

  const handleSubmit = async (values, { setSubmitting, resetForm }) => {
    try {
      let payload = { 
        ...values,
        isActive: status 
      };
      
        await createmutate(payload);
      
      setSubmitting(false);
      resetForm();
    } catch (e) {
      setSubmitting(true);
      console.log("Error during Create ", e);
    }
  };

  return (
    <Fragment>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={false}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
      >
        <Fade in={open}>
          <Box sx={style}>
            <div>
              <Formik
                initialValues={{
                  name: "",
                  isActive: status,
                }}
                validationSchema={accessmethodValidation}
                onSubmit={handleSubmit}
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
                      <Typography variant="h5" component="h5">
                        {"Add "} AccessMethod
                      </Typography>
                      <div style={{}}>
                        <IconButton
                          aria-label="edit"
                          onClick={() => {
                            onClose();
                            resetForm();
                          }}
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
                      </div>
                    </Box>
                    <Divider sx={{ mb: 2 }}>
                      <Chip label="AccessMethod" />
                    </Divider>

                    <div className="mt-4 pb-3">
                      <div>
                        <Field
                          name="name"
                          id="name"
                          label="AccessMethod Name"
                          placeholder="Type here"
                          component={CommonInputText}
                          onChange={handleChange}
                          value={values.name}
                          error={touched.name && errors.name}
                          className={`appearance-none  block
                          ${touched.name && errors.name ? "border-red-500" : ""}`}
                        />
                        <ErrorMessage
                          name="name"
                          component="div"
                          className="mt-2 text-sm text-red-600"
                        />
                      </div>

                      <div>
                        <Field
                          id="status-label-id"
                          name="status"
                          label="Status"
                          labelId="status-label-id"
                          setSelect={setStatus}
                          options={Status}
                          component={CommonSelect}
                          value={status}
                          defaultValue={values?.isActive}
                          width={387}
                        />
                      </div>
                    </div>

                    <div className="flex  justify-center space-x-5 mt-5">
                      <CommonButton
                        text="reset"
                        type="reset"
                        className="border border-primary hover:bg-gray-100 w-24 flex justify-center items-center"
                        onClick={() => resetForm()}
                      />

                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="group relative w-44 flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-primary hover:bg-[#cacc57] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
                      >
                        <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                          {createLoading  ? (
                            <Loader size={18} />
                          ) : (
                            <BiLockAlt
                              className="h-5 w-5 text-gray-600 group-hover:text-gray-800"
                              aria-hidden="true"
                            />
                          )}
                        </span>
                        { "Save Changes"}
                      </button>
                    </div>
                  </Form>
                )}
              </Formik>
            </div>
          </Box>
        </Fade>
      </Modal>
    </Fragment>
  );
};

export default AddAccessMethod;
