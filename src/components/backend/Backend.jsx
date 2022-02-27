import React from 'react';
import PropTypes from 'prop-types';
import Sidebar from './partials/Sidebar'
import { Outlet } from 'react-router';
Backend.propTypes = {

};

function Backend(props) {
    return (
        <div>
            Backend Layout
            <Sidebar />
            <Outlet />
        </div>
    );
}

export default Backend;