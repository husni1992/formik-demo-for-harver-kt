import { Formik, Field, Form, ErrorMessage } from "formik";

import { validate } from "./validator";
import { Separator } from "../shared/Seperator";
import { ErrorDisplay } from "../shared/ErrorDisplay";

const Three = () => {
	return (
		<Formik
			initialValues={{ firstName: "", lastName: "", email: "", vehicle: false }}
			validate={validate}
			onSubmit={(values, { setSubmitting }) => {
				setTimeout(() => {
					alert(JSON.stringify(values, null, 2));
					setSubmitting(false);
				}, 400);
			}}
		>
			<Form>
				<h2>Formik - Example three</h2>

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

export default Three;
