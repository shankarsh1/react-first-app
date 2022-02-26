import React from "react";
import PropTypes from "prop-types";

import { Link, NavLink, Outlet } from "react-router-dom";
function Header(props) {
  /* var isActive = this.context.router.route.location.pathname === this.props.to;
  var className = isActive ? "active" : ""; */
  return (
    <React.Fragment>
      <header>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <NavLink style={({ isActive }) => { return { color: isActive ? 'red' : '' } }} className="navbar-brand" to="/">
            Home
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                <NavLink style={({ isActive }) => { return { color: isActive ? 'red' : '' } }} className="nav-link" to="/tutorial">
                  Tutorials
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink style={({ isActive }) => { return { color: isActive ? 'red' : '' } }} className="nav-link" to="/admin/tutorial/010">
                  nested Tutorials
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink style={({ isActive }) => { return { color: isActive ? 'red' : '' } }} className="nav-link" to="/expenses" state={{ name: 'uma Shankar' }}>
                  {props.title} <span className="sr-only"> {props.title}</span>
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink style={({ isActive }) => { return { color: isActive ? 'red' : '' } }} className="nav-link" to="/contact" state={{ name: 'uma Shankar' }}>
                  Contact
                </NavLink>
              </li>

              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Dropdown
                </a>
                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <a className="dropdown-item" href="#">
                    Action
                  </a>
                  <a className="dropdown-item" href="#">
                    Another action
                  </a>
                  <div className="dropdown-divider"></div>
                  <a className="dropdown-item" href="#">
                    Something else here
                  </a>
                </div>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link disabled"
                  href="#"
                  tabIndex="-1"
                  aria-disabled="true"
                >
                  Disabled
                </a>
              </li>
            </ul>
            <form className="form-inline my-2 my-lg-0">
              <input
                className="form-control mr-sm-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button
                className="btn btn-outline-success my-2 my-sm-0"
                type="submit"
              >
                Search
              </button>
            </form>
          </div>
        </nav>
        <Outlet />
      </header>
      {/* <header>
                <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
                    <div className="container-fluid">
                        <a className="navbar-brand" href="#">Fixed navbar</a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                                data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false"
                                aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarCollapse">
                            <ul className="navbar-nav me-auto mb-2 mb-md-0">
                                <li className="nav-item">
                                    <a className="nav-link active" aria-current="page" href="#">Home</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Link</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link disabled">Disabled</a>
                                </li>
                            </ul>
                            <form className="d-flex">
                                <input className="form-control me-2" type="search" placeholder="Search"
                                       aria-label="Search"/>
                                <button className="btn btn-outline-success" type="submit">Search</button>
                            </form>
                        </div>
                    </div>
                </nav>
            </header> */}
    </React.Fragment>
  );
}

Header.defaultProps = {
  title: "Expenses",
};
Header.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Header;
