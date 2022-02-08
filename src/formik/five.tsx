import { Formik, Form, useField } from "formik";
import * as Yup from "yup";

import { Separator } from "../shared/Seperator";
import { ErrorDisplay } from "../shared/ErrorDisplay";

const MyTextInput = ({ label, ...props }: any) => {
	const [field, meta] = useField(props);
	return (
		<>
			<label htmlFor={props.id || props.name}>{label}</label>
			<input className="text-input" {...field} {...props} />
			{meta.touched && meta.error ? <ErrorDisplay>{meta.error} </ErrorDisplay> : null}
		</>
	);
};

const MyCheckbox = ({ children, ...props }: any) => {
	const [field, meta] = useField({ ...props, type: "checkbox" });
	return (
		<div>
			<label className="checkbox-input">
				<input type="checkbox" {...field} {...props} />
				{children}
			</label>
			{meta.touched && meta.error ? <ErrorDisplay>{meta.error} </ErrorDisplay> : null}
		</div>
	);
};

const MySelect = ({ label, ...props }: any) => {
	const [field, meta] = useField(props);
	return (
		<div>
			<label htmlFor={props.id || props.name}>{label}</label>
			<select {...field} {...props} />
			{meta.touched && meta.error ? <ErrorDisplay>{meta.error} </ErrorDisplay> : null}
		</div>
	);
};

const Five = () => {
	return (
		<>
			<h2>Formik - Example Five with hooks</h2>
			<Formik
				initialValues={{
					firstName: "",
					lastName: "",
					email: "",
					acceptedTerms: false, // added for our checkbox
					jobType: "", // added for our select
				}}
				validationSchema={Yup.object({
					firstName: Yup.string().max(15, "Must be 15 characters or less").required("Required"),
					lastName: Yup.string().max(20, "Must be 20 characters or less").required("Required"),
					email: Yup.string().email("Invalid email address").required("Required"),
					acceptedTerms: Yup.boolean().required("Required").oneOf([true], "You must accept the terms and conditions."),
					jobType: Yup.string().oneOf(["designer", "development"], "Invalid Job Type").required("Required"),
				})}
				onSubmit={(values, { setSubmitting }) => {
					setTimeout(() => {
						alert(JSON.stringify(values, null, 2));
						setSubmitting(false);
					}, 400);
				}}
			>
				<Form>
					<MyTextInput label="First Name" name="firstName" id="firstName" type="text" placeholder="Jane" />
					<Separator />

					<MyTextInput label="Last Name" name="lastName" id="lastName" type="text" placeholder="Doe" />
					<Separator />

					<MyTextInput label="Email Address" name="email" id="email" type="email" placeholder="jane@formik.com" />
					<Separator />

					<MySelect label="Job Type" name="jobType" id="jobType">
						<option value="">Select a job type</option>
						<option value="designer">Designer</option>
						<option value="development">Developer</option>
						<option value="product">Product Manager</option>
						<option value="other">Other</option>
					</MySelect>
					<Separator />

					<MyCheckbox name="acceptedTerms" id="acceptedTerms">
						I accept the terms and conditions
					</MyCheckbox>
					<Separator />

					<button type="submit">Submit</button>
				</Form>
			</Formik>
		</>
	);
};

export default Five;
