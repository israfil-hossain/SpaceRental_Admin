import { object, string, ref } from 'yup';

const addSpaceTypeValidationSchema = object({
  name: string().required("Space Name is Required"),
  pricePerMonth: string().required("Price Per Month is Required"),
  
});

export default addSpaceTypeValidationSchema;
