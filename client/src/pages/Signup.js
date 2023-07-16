import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

const Signup = () => {
	const [nameInput, setNameInput] = useState("");
	const [username, setUsername] = useState("");
	const [userEmail, setUserEmail] = useState("");
	const [userPass, setUserPass] = useState("");
	const navigate = useNavigate();

	const handleNameChange = (event) => {
		setNameInput(event.nativeEvent.target.value);
	};

	const handleUserChange = (event) => {
		setUsername(event.nativeEvent.target.value);
	};

	const handleEmailChange = (event) => {
		setUserEmail(event.nativeEvent.target.value);
	};

	const handlePassChange = (event) => {
		setUserPass(event.nativeEvent.target.value);
	};

	const handleRedirect = () => {
		navigate("/");
	}

	const handleSignUp = async (event) => {
		event.preventDefault();

		const data = {
			name: nameInput,
			username: username,
			email: userEmail,
			password: userPass
		};

		try {
			const response = await axios.post(
				"/api/users/signup",
				JSON.stringify(data),
				{
					headers: {
						"Content-Type": "application/json",
					},
				}
			);
			console.log(response.data);
			if (response.status === 200) {
				handleRedirect();
			}
		} catch (error) {
			console.error(error);
		}
	};

	return (
		<div className="mt-5">
			<h2>Sign Up</h2>

			<form className="px-4 py-3">
				<div>
					<div className="form-group m-1">
						<input
							type="text"
							className="form-control"
							id="name"
							placeholder="name"
							onChange={handleNameChange}
						/>
					</div>
					<div className="form-group m-1">
						<input
							type="text"
							className="form-control"
							id="username"
							placeholder="username"
							onChange={handleUserChange}
						/>
					</div>
				</div>
				<div className="form-group m-1">
					<input
						type="email"
						className="form-control"
						id="email"
						placeholder="email@example.com"
						onChange={handleEmailChange}
					/>
				</div>
				<div className="form-group m-1">
					<input
						type="password"
						className="form-control"
						id="exampleDropdownFormPassword1"
						placeholder="password"
						onChange={handlePassChange}
					/>
				</div>

				<Link to="/">
					{" "}
					<button
						type="submit"
						className="btn btn-primary m-1"
						onClick={handleSignUp}
					>
						Sign up
					</button>
				</Link>
			</form>
			<div className="dropdown-divider"></div>
			<Link className="dropdown-item" to="/login">
			</Link>
			<Link className="dropdown-item" to="#">
				Forgot password?
			</Link>
		</div>
	);
};

export default Signup;
