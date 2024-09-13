import * as Yup from "yup";

const spaceValidation = Yup.object().shape({
  name: Yup.string().required("Space Name is Required"),
  pricePerMonth: Yup.number()
    .required("Price is Required")
    .typeError("Price must be a number"),
});

export default spaceValidation;
