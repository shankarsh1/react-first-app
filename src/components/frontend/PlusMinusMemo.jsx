import React from 'react';
import PropTypes from 'prop-types';

PlusMinusMemo.propTypes = {

};

function PlusMinusMemo(props) {
    console.log(props);
    return (
        <div>
            PlusMinusMemo Layout<br />
            data count: {props.data}
        </div>
    );
}

export default React.memo(PlusMinusMemo);