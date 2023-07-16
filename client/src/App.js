// using axios for our fetch requests
import axios from "axios";
import { useEffect, useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar.js";
import Home from "./pages/Home";
import Login from "./pages/Login.js";
import Signup from "./pages/Signup.js";
import Profile from "./pages/Profile.js";
import CreateJob from "./pages/CreateJob.js";
import EditProfile from "./pages/EditProfile.js";

// import useLocalStorage from "use-local-storage";
// import to let us use React 'Browser Router' as 'Router'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// Component Imports

function App() {
	//theme code
	// const defaultDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
	// const [theme, setTheme] = useLocalStorage("theme", defaultDark ? "dark" : "light");

	// const switchTheme = () => {
	//   const newTheme = theme === "dark" ? "light" : "dark";
	//   setTheme(newTheme);
	// }

	return (
		<div>
			<Navbar></Navbar>
			<div className="App" data-theme={null}>
				<Router>
					<Routes>
						{/* Defining each route for pages depending on path */}
						<Route
							path="/"
							element={
								<>
									<Home></Home>
								</>
							}
						></Route>
						<Route
							path="/login"
							element={
								<>
									{/* <> after element lets you add multiple components. */}
									<Login />
								</>
							}
						></Route>
						<Route
							path="/signup"
							element={
								<>
									<Signup />
								</>
							}
						></Route>
												<Route
							path="/editprofile"
							element={
								<>
									<EditProfile />
								</>
							}
						></Route>
						<Route
							path="/profile"
							element={
								<>
									<Profile />
								</>
							}
						></Route>
						<Route
							path="/createjob"
							element={
								<>
									<CreateJob />
								</>
							}
						></Route>
						{/* catch all route, * is anything we haven't defined, a 404 route */}
						<Route
							path="*"
							element={
								<>
									<div>
										<h2>Nothing Here</h2>
									</div>
								</>
							}
						></Route>
					</Routes>
				</Router>
			</div>
		</div>
	);
}

export default App;
