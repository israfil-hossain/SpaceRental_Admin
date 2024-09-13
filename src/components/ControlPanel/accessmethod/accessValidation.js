import * as Yup from "yup";

const accessmethodValidation = Yup.object().shape({
  name: Yup.string().required("Space Name is Required")
});

export default accessmethodValidation;
