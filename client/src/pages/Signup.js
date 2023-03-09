import React from 'react'
import { Link } from 'react-router-dom';

const Signup = () => {
  return (
    <div>
      <h2>Sign Up</h2>

        <form className="px-4 py-3">
          <div>
            <div className="form-group m-1">
              <input type="email" className="form-control" id="exampleDropdownFormEmail1" placeholder="Full Name"/>
            </div>
          </div>
          <div className="form-group m-1">
            <input type="email" className="form-control" id="exampleDropdownFormEmail1" placeholder="email@example.com"/>
          </div>
          <div className="form-group m-1">
            <input type="password" className="form-control" id="exampleDropdownFormPassword1" placeholder="Password"/>
          </div>
          <div className="form-check m-1 justify-content-center d-flex">
            <input type="checkbox" className="form-check-input m-1" id="dropdownCheck"/>
            <p className="">Are you hiring?</p>
          </div>

         <Link to="/"> <button type="submit" className="btn btn-primary m-1">Sign up</button></Link>
        </form>
        <div className="dropdown-divider"></div>
        <Link to="/login"><a className="dropdown-item" href="#">Already have an account? Sign in</a></Link>
        <a className="dropdown-item" href="#">Forgot password?</a>
    </div>
  )
}

export default Signup