import * as Yup from "yup";

const unloadValidation = Yup.object().shape({
  name: Yup.string().required("Space Name is Required")
});

export default unloadValidation;
