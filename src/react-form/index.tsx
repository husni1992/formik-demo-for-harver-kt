import { useState } from "react";

import { validate } from "./validator";
import { Separator } from "../shared/Seperator";

export const ReactForm = () => {
	const [name, setName] = useState("");
	const [age, setAge] = useState("");
	const [email, setEmail] = useState("");
	const [address, setAddress] = useState("");
	const [errors, setErrors] = useState<any>({});

	const handleNameChange = (evt: any) => {
		setName(evt.target.value);
	};

	const handleAgeChange = (evt: any) => {
		setAge(evt.target.value);
	};

	const handleEmailChange = (evt: any) => {
		setEmail(evt.target.value);
	};

	const handleAddressChange = (evt: any) => {
		setAddress(evt.target.value);
	};

	const handleSubmit = (evt: any) => {
		evt.preventDefault();
		const errors = validate({ name, age, email, address });
		setErrors(errors);
	};

	return (
		<form onSubmit={handleSubmit}>
			<h1>Manual Form handling in React</h1>

			<Separator />
			<Separator />

			<label style={{ marginRight: 10 }}>Name</label>
			<input
				type="text"
				value={name}
				onChange={handleNameChange}
			/>
			{errors.name && (
				<span style={{ color: "red" }}>{errors.name}</span>
			)}
			<Separator />

			<label style={{ marginRight: 10 }}>Age</label>
			<input
				type="number"
				value={age}
				onChange={handleAgeChange}
			/>
			{errors.age && (
				<span style={{ color: "red" }}>{errors.age}</span>
			)}
			<Separator />

			<label style={{ marginRight: 10 }}>email</label>
			<input
				type="email"
				value={email}
				onChange={handleEmailChange}
			/>
			{errors.email && (
				<span style={{ color: "red" }}>{errors.email}</span>
			)}
			<Separator />

			<label style={{ marginRight: 10 }}>Addres</label>
			<input
				type="text"
				value={address}
				onChange={handleAddressChange}
			/>
			{errors.address && (
				<span style={{ color: "red" }}>{errors.address}</span>
			)}
			<Separator />

			<button type="submit">submit</button>
			<Separator />

			<div>{JSON.stringify({ name, age, email, address })}</div>
		</form>
	);
};
