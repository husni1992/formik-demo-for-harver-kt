export const validate = (values: any) => {
  const errors: any = {};

  if (!values.name) {
    errors.name = "Required";
  } else if (values.name.length > 15) {
    errors.name = "Must be 15 characters or less";
  }

  if (!values.age) {
    errors.age = "Required";
  }

  if (parseInt(values.age, 10) > 80 || parseInt(values.age, 10) < 20) {
    errors.age = "Must be between 20 and 80";
  }

  if (!values.email) {
    errors.email = "Required";
  }

  if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = "Invalid email address";
  }

  if (!values.address) {
    errors.address = "Required";
  }

  return errors;
};
