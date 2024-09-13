import * as Yup from "yup";

const storageValidation = Yup.object().shape({
  name: Yup.string().required("Space Name is Required")
});

export default storageValidation;
