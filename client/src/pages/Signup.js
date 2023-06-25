import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

const Signup = () => {
	const [username, setUsername] = useState("");
	const [userEmail, setUserEmail] = useState("");
	const [userPass, setUserPass] = useState("");
	const navigate = useNavigate();

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
			username: username,
			email: userEmail,
			password: userPass,
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
				<div className="form-check m-1 justify-content-center d-flex">
					<input
						type="checkbox"
						className="form-check-input m-1"
						id="dropdownCheck"
					/>
					<p className="">Are you hiring?</p>
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
			<Link to="/login">
				{/* <Link /> is react for <a> so those a's aren't needed. but you will need to 
        		style the elements so they are to your liking once you comment out or delete the <a>'s */}
				<a className="dropdown-item" href="#">
					Already have an account? Sign in
				</a>
			</Link>
			<a className="dropdown-item" href="#">
				Forgot password?
			</a>
		</div>
	);
};

export default Signup;
