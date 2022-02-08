import { useFormik } from "formik";

import { validate } from "./validator";
import { Separator } from "../shared/Seperator";
import { ErrorDisplay } from "../shared/ErrorDisplay";

const One = () => {
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
			<h2>Formik - Example One</h2>

			<label htmlFor="firstName">First Name</label>
			<input
				id="firstName"
				name="firstName"
				type="text"
				onChange={formik.handleChange}
				onBlur={formik.handleBlur}
				value={formik.values.firstName}
			/>
			{formik.touched.firstName && formik.errors.firstName ? <ErrorDisplay>{formik.errors.firstName}</ErrorDisplay> : null}
			<Separator />

			<label htmlFor="lastName">Last Name</label>
			<input
				id="lastName"
				name="lastName"
				type="text"
				onChange={formik.handleChange}
				onBlur={formik.handleBlur}
				value={formik.values.lastName}
			/>
			{formik.touched.lastName && formik.errors.lastName ? <ErrorDisplay>{formik.errors.lastName}</ErrorDisplay> : null}
			<Separator />

			<label htmlFor="email">Email Address</label>
			<input id="email" name="email" type="email" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.email} />
			{formik.touched.email && formik.errors.email ? <ErrorDisplay>{<ErrorDisplay>{formik.errors.email}</ErrorDisplay>}</ErrorDisplay> : null}
			<Separator />

			<label htmlFor="vehicle1"> I have a bike</label>
			<input
				type="checkbox"
				id="vehicle1"
				name="vehicle1"
				onChange={formik.handleChange}
				onBlur={formik.handleBlur}
				value={formik.values.email}
			/>
			<Separator />

			<div>
				<button type="submit">Submit</button>
			</div>
		</form>
	);
};

export default One;
