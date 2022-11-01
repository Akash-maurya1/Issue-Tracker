import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <>
  {/* Navbar */}
  <nav className="navbar navbar-expand-lg navbar-light bg-light">
    {/* Container wrapper */}
    <div className="container">
      {/* Navbar brand */}
      <a className="navbar-brand mt-lg-0" href="#">
  <img
    src="https://issues.joomla.org/images/avatars/joombler.png"
    height={30}
    alt="ISSUE LOGO"
    loading="lazy"
  />
</a>

      
      {/* Toggle button */}
      <button
        className="navbar-toggler"
        type="button"
        data-mdb-toggle="collapse"
        data-mdb-target="#navbarButtonsExample"
        aria-controls="navbarButtonsExample"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <i className="fas fa-bars" />
      </button>
      {/* Collapsible wrapper */}
      <div className="collapse navbar-collapse" id="navbarButtonsExample">
        {/* Left links */}
       
        {/* Left links */}
        <div className="d-flex align-items-center">

          <NavLink to="/login" type="button" className="btn btn-link px-3 me-2">
            Login
          </NavLink>
          <NavLink to="/signup" type="button" className="btn btn-link px-3 me-2">
            Signup
          </NavLink>
          <NavLink to="/manage" type="button" className="btn btn-link px-3 me-2">
            Manage Issue
          </NavLink>
          <NavLink to="/AddIssue" type="button" className="btn btn-link px-3 me-2">
            Add Issue
          </NavLink>
          
         
        </div>
      </div>
      {/* Collapsible wrapper */}
    </div>
    {/* Container wrapper */}
  </nav>
  {/* Navbar */}
</>

  )
}

export default Header ;
