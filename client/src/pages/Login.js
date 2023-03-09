import React from 'react'
import { Link } from 'react-router-dom';


import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

const Login = () => {
  return (
    <div className="mt-5">
      <h2>Log In</h2>

      <form className="px-4 py-3">
        <div className="form-group m-1">
          <input type="email" className="form-control" id="exampleDropdownFormEmail1" placeholder="email@example.com"/>
        </div>
        <div className="form-group m-1">
          <input type="password" className="form-control" id="exampleDropdownFormPassword1" placeholder="Password"/>
        </div>
        <div className="form-check m-1 justify-content-center d-flex">
          <input type="checkbox" className="form-check-input m-1" id="dropdownCheck"/>
          <p>Remember Me</p>
        </div>
        <Link to="/"> <button type="submit" className="btn btn-primary m-1">Sign in</button></Link>
      </form>
      <div className="dropdown-divider"></div>
      <Link to="/signup"><a className="dropdown-item" href="/signup">New around here? Sign up</a></Link>
      <a className="dropdown-item" href="#">Forgot password?</a>


    </div>
  )
}

export default Login