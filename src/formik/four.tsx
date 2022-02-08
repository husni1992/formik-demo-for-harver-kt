import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";

// import { validate } from "./validator";
import { Separator } from "../shared/Seperator";
import { ErrorDisplay } from "../shared/ErrorDisplay";

const yupValidator = Yup.object({
	firstName: Yup.string().max(15, "Must be 15 characters or less").required("Required"),
	lastName: Yup.string().max(20, "Must be 20 characters or less").required("Required"),
	email: Yup.string().email("Invalid email address").required("Required"),
});

const Four = () => {
	return (
		<Formik
			initialValues={{ firstName: "", lastName: "", email: "", vehicle: false }}
			//   validate={validate}
			validationSchema={yupValidator}
			onSubmit={(values, { setSubmitting }) => {
				setTimeout(() => {
					alert(JSON.stringify(values, null, 2));
					setSubmitting(false);
				}, 400);
			}}
		>
			<Form>
				<h2>Formik - Example four with yup validator</h2>

				<label htmlFor="firstName">First Name</label>
				<Field name="firstName" id="firstName" type="text" />
				<ErrorMessage name="firstName">{(msg) => <ErrorDisplay>{msg}</ErrorDisplay>}</ErrorMessage>
				<Separator />

				<label htmlFor="lastName">Last Name</label>
				<Field name="lastName" id="lastName" type="text" />
				<ErrorMessage name="lastName">{(msg) => <ErrorDisplay>{msg}</ErrorDisplay>}</ErrorMessage>
				<Separator />

				<label htmlFor="email">Email Address</label>
				<Field name="email" id="email" type="email" />
				<ErrorMessage name="email">{(msg) => <ErrorDisplay>{msg}</ErrorDisplay>}</ErrorMessage>
				<Separator />

				<label htmlFor="vehicle"> I have a bike</label>
				<Field name="vehicle" id="vehicle" type="checkbox" />
				<Separator />

				<Field name="colors" as="select" className="my-select">
					<option value="red">Red</option>
					<option value="green">Green</option>
					<option value="blue">Blue</option>
				</Field>

				<button type="submit">Submit</button>
			</Form>
		</Formik>
	);
};

export default Four;
