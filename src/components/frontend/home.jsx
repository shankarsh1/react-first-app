import React, { useMemo, useState } from 'react';
import PropTypes from 'prop-types';
import PlusMinus from './PlusMinus';
import PlusMinusDemo from './PlusMinusDemo';
Home.propTypes = {

};

function Home(props) {
    return (
        <>
            <div className="col text-center"> Home Layout</div>
            <div className="row">
                <div className="col-6">
                    <PlusMinus />
                </div>
                <div className="col-6">
                    <PlusMinusDemo />
                </div>
            </div>
        </>
    );
}

export default Home;