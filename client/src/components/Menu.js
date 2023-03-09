import React from 'react'

const Menu = () => {
  return (
    <div className="dropdown">
    <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
      menu
    </button>
    <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
      <a className="dropdown-item" href="#">profile</a>
      <a className="dropdown-item" href="#">notifications</a>
      <a className="dropdown-item" href="#">job search</a>
      <a className="dropdown-item" href="#">posts</a>
    </div>
  </div>
  )
}

export default Menu