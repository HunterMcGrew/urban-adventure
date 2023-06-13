import React from 'react'


const Menu = () => {
  return (
    <div className="dropdown">
    <button className="btn  " type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
      <svg xmlns="http://www.w3.org/2000/svg" width="26" height="18">
        <defs>
          <clipPath id="a">
            <path d="M0 0h26v18H0z"/>
          </clipPath>
        </defs>
        <g data-name="アートボード – 1" clip-path="url(#a)" fill="none" stroke="#000">
          <path data-name="線 1" d="M0 .5h26"/>
          <path data-name="線 2" d="M0 17.5h26"/>
          <path data-name="線 3" d="M0 9h26"/>
        </g>
      </svg>
    </button>
    <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
      <a className="dropdown-item" href="/profile">profile</a>
      <a className="dropdown-item" href="*">notifications</a>
      <a className="dropdown-item" href="/">job search</a>
      <a className="dropdown-item" href="/createjob">create job</a>
      <a className="dropdown-item" href="/login">log in</a>
      <a className="dropdown-item" href="/signup">sign up</a>
      <a className="dropdown-item" href="/">settings</a>
    </div>
  </div>
  )
}

export default Menu