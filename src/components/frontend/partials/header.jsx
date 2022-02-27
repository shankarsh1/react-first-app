import React from 'react';
import PropTypes from 'prop-types';
import { Link, NavLink, Outlet } from "react-router-dom";
import Footer from './Footer';
Header.propTypes = {

};

function Header(props) {
    return (
        <>
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
                    ><span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item">
                                <NavLink style={({ isActive }) => { return { color: isActive ? 'red' : '' } }} className="nav-link" to="/dashboard" state={{ name: 'uma Shankar' }}>
                                    Dashboard
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink style={({ isActive }) => { return { color: isActive ? 'red' : '' } }} className="nav-link" to="/about">
                                    About Us
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink style={({ isActive }) => { return { color: isActive ? 'red' : '' } }} className="nav-link" to="/contact-us">
                                    Contact Us
                                </NavLink>
                            </li>

                            <li className="nav-item">
                                <NavLink style={({ isActive }) => { return { color: isActive ? 'red' : '' } }} className="nav-link" to="/dashboard" state={{ name: 'uma Shankar' }}>
                                    {props.title} <span className="sr-only"> {props.title}</span>
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
                                >Dropdown</a>
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
                        </ul>
                    </div>
                </nav>
            </header>
            <main role="main" className="flex-shrink-0"></main>
            <div className="container">
                <Outlet />
            </div>
            <main />
            <Footer />
        </>
    );
}

export default Header;