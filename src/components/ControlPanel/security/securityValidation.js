import * as Yup from "yup";

const securityValidation = Yup.object().shape({
  name: Yup.string().required("Space Name is Required")
});

export default securityValidation;
