import React, { Component } from "react";
import PropTypes from "prop-types";
import "./Main.css";
import Student from "./Student";
import Employee from "./Employee";
import { Outlet, Route, Routes } from "react-router";
import { NavLink } from "react-router-dom";
class Contact extends Component {
    constructor(props) {
        super(props);
    }

    componentWillMount() { }

    componentDidMount() { }

    componentWillReceiveProps(nextProps) { }

    shouldComponentUpdate(nextProps, nextState) {
        return true;
    }

    componentWillUpdate(nextProps, nextState) { }

    componentDidUpdate(prevProps, prevState) { }

    componentWillUnmount() { }

    render() {
        return (
            <div className="jumbotron jumbotron-fluid">
                <h2>Contact Page</h2>

                <Routes>
                    <Route path="/employee" element={<Employee />} />
                    <Route path="/student" element={<Student />} />
                </Routes>
            </div>
        );
    }
}

Contact.propTypes = {};

export default Contact;
