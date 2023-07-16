import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Login = () => {
	const [emailCheck, setEmailCheck] = useState();
	const [passwordCheck, setPasswordCheck] = useState();
	const navigate = useNavigate();

	function handleEmailCheck(event){
		setEmailCheck(event.target.value)
	}
	function handlePasswordCheck(event){
		setPasswordCheck(event.target.value)
	}
	async function userLogin(event){
		event.preventDefault()
		let data = {
			email:emailCheck,
			password:passwordCheck
		}
		try{
			const response = await axios.get("/api/users/login")
			console.log(response)
			if (response.status == 200){
				navigate("/")
			}
		}catch(error){
			console.log(error)
		}
	}

	return (
		<div className="mt-5">
			<h2>Log In</h2>

			<form className="px-4 py-3">
				<div className="form-group m-1">
					<input
						type="email"
						className="form-control"
						id="email"
						placeholder="email@example.com"
						onChange = {handleEmailCheck}
					/>
				</div>
				<div className="form-group m-1">
					<input
						type="password"
						className="form-control"
						id="exampleDropdownFormPassword1"
						placeholder="password"
						onChange = {handlePasswordCheck}
					/>
				</div>
				<div className="form-check m-1 justify-content-center d-flex">
					<input
						type="checkbox"
						className="form-check-input m-1"
						id="dropdownCheck"
					/>
					<p>Remember Me</p>
				</div>
					{" "}
					<button type="submit" className="btn btn-primary m-1" onClick={userLogin}>
						Sign in
					</button>

			</form>
			<div className="dropdown-divider"></div>
			<Link to="/signup">
				<a className="dropdown-item" href="/signup">
					New around here? Sign up
				</a>
			</Link>
			<a className="dropdown-item" href="#">
				Forgot password?
			</a>
		</div>
	);
};

export default Login;
