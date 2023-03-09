import React from 'react'

const Searchbar = () => {
  return (
    <div className="container align-items-center">
          <form className="form-inline row align-items-center">
            <input className="form-control  col m-2 " type="search" placeholder="location" aria-label="Search"></input>
            <button className="btn btn-outline-primary col-2 height-1 m-2" type="submit">search</button>
        </form>
    </div>
  )
}

export default Searchbar