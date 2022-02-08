import { useFormik } from "formik";

import { validate } from "./validator";
import { Separator } from "../shared/Seperator";
import { ErrorDisplay } from "../shared/ErrorDisplay";

const Two = () => {
	const formik = useFormik({
		initialValues: {
			firstName: "",
			lastName: "",
			email: "",
			vehicle1: false,
		},
		validate,
		onSubmit: (values) => {
			alert(JSON.stringify(values, null, 2));
		},
	});
	return (
		<form onSubmit={formik.handleSubmit}>
			<h2>Formik - Example two</h2>

			<label htmlFor="firstName">First Name</label>
			<input id="firstName" type="text" {...formik.getFieldProps("firstName")} />
			{formik.touched.firstName && formik.errors.firstName ? <ErrorDisplay>{formik.errors.firstName}</ErrorDisplay> : null}
			<Separator />

			<label htmlFor="lastName">Last Name</label>
			<input id="lastName" type="text" {...formik.getFieldProps("lastName")} />
			{formik.touched.lastName && formik.errors.lastName ? <ErrorDisplay>{formik.errors.lastName}</ErrorDisplay> : null}
			<Separator />

			<label htmlFor="email">Email Address</label>
			<input id="email" type="email" {...formik.getFieldProps("email")} />
			{formik.touched.email && formik.errors.email ? <ErrorDisplay>{<ErrorDisplay>{formik.errors.email}</ErrorDisplay>}</ErrorDisplay> : null}
			<Separator />

			<label htmlFor="vehicle1"> I have a bike</label>
			<input type="checkbox" id="vehicle1" {...formik.getFieldProps("vehicle1")} />
			<Separator />

			<div>
				<button type="submit">Submit</button>
			</div>
		</form>
	);
};

export default Two;
