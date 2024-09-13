import * as Yup from "yup";

const scheduleValidation = Yup.object().shape({
  name: Yup.string().required("Space Name is Required")
});

export default scheduleValidation;
