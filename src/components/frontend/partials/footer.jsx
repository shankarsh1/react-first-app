import React from 'react';
import PropTypes from 'prop-types';

Footer.propTypes = {

};

function Footer(props) {
    return (
        <>
            <footer className="footer mt-auto py-3">
                <div className="container">
                    <span className="text-muted">Place sticky footer content here.</span>
                </div>
            </footer>
        </>
    );
}

export default Footer;