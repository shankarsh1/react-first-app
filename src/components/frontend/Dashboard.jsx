import React from 'react';
import PropTypes from 'prop-types';
import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'
Dashboard.propTypes = {

};

function Dashboard(props) {
    const options = {
        title: {
            text: 'My chart'
        },
        series: [{
            data: [1, 2, 3]
        }]
    }
    return (
        <>
            <HighchartsReact highcharts={Highcharts}
                options={options}>

            </HighchartsReact>
        </>
    );
}

export default Dashboard;