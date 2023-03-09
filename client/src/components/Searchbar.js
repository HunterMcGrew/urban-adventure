//rafce

import React from 'react'

const Searchbar = () => {
  return (
    <div className="container align-items-center mt-3">
          <form className="form-inline row align-items-center">
            <input className="form-control  col m-2 " type="search" placeholder="Location" aria-label="Search"></input>
            <button className="col-2 btn btn-primary m-1" type="submit">Search</button>
        </form>
    </div>
  )
}

export default Searchbar