import * as Yup from 'yup';

  const scheduleValidationSchema = Yup.object().shape({
    schedule: Yup.array().of(
      Yup.object().shape({
        day: Yup.string(),
        startTime: Yup.string().when('selected', {
          is: true,
          then: Yup.string().required('Start Time is required when day is selected'),
        }),
        endTime: Yup.string().when('selected', {
          is: true,
          then: Yup.string().required('End Time is required when day is selected'),
        }),
        selected: Yup.boolean(),
      })
    ),
  });

export default scheduleValidationSchema;
