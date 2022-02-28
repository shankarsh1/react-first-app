import React, { Component } from 'react';
import PropTypes from 'prop-types';
import PlusMinusMemo from './PlusMinusMemo';
import { increment, decrement } from '../actions/Index';
import { Button } from 'react-bootstrap';
import __ from 'lodash'
import { connect } from 'react-redux';
class PlusMinusDemo extends Component {
    constructor(props) {
        super(props);
        console.log(props)
        this.state = {
            count: 0,
            data: 0,
            countOne: 0,
            countTwo: 0,
            isRedux: 1,
        }
    }

    render() {
        return (
            <>
                PlusMinus class Layout<br />
                {
                    !this.state.isRedux ? <>
                        <Button variant='info' onClick={() => this.setState({ ...this.state, count: this.state.count + 1 })}>{this.state.count} Increment</Button>
                        <br /><br />
                        <Button variant='success' onClick={() => this.setState({ ...this.state, count: this.state.countOne + 1 })}>{this.state.countOne} Increment one</Button>
                        <br />
                        <br />
                        <Button variant='primary' onClick={() => this.setState({ ...this.state, count: this.state.countTwo + 1 })}>{this.state.countTwo} Increment Two</Button>

                        <PlusMinusMemo data={this.state.data} />
                    </> : <>
                        <Button variant='success' onClick={() => this.props.decrement(1, this.props.res[0] - 1)}>-Decrement</Button>
                        <span>&nbsp;{this.props.res[0]}&nbsp;</span>
                        <Button variant='primary' onClick={() => this.props.increment(2, this.props.res[0] + 1)}>+Increment</Button>
                        <div style={{ textColor: 'red' }}>{this.props.res[1]}</div>
                    </>
                }
            </>
        );
    }
}
const mapDispatchToProps = (dispatch => {
    return {
        increment: (num) => dispatch(increment(num)),
        decrement: (num) => dispatch(decrement(num))
    }
})

const mapStateToProps = (state => {
    return {
        res: state.changeCount
    }
})
PlusMinusDemo.propTypes = {

};

export default connect(mapStateToProps, mapDispatchToProps)(PlusMinusDemo);