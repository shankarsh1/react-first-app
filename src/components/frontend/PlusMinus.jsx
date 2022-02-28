import React, { useMemo, useState } from 'react';
import PropTypes from 'prop-types';
import PlusMinusMemo from './PlusMinusMemo';
import { Button } from 'react-bootstrap';
import { increment, decrement } from '../actions/Index';
import __ from 'lodash'
import { useDispatch, useSelector } from 'react-redux';

PlusMinus.propTypes = {

};

function PlusMinus(props) {
    const [count, setCount] = useState(0)
    const [data, setData] = useState(0)
    const [countOne, setCountOne] = useState(0)
    const [countTwo, setCountTwo] = useState(0)
    const [isRedux, setIsRedux] = useState(1)
    const isEven = useMemo(() => {
        console.info('Is Even', __.max([1, 2, 3, 4, 510]))
        return countOne % 2 === 0
    }, [countOne])
    const dispatch = useDispatch()
    const res = useSelector((state) => state.changeCount)
    console.log(res)
    return (
        <>
            PlusMinus function Layout<br />
            {
                !isRedux ? <>
                    <Button variant='info' onClick={() => setCount(count + 1)}>{count} Increment</Button>
                    <br /><br />

                    <Button variant='success' onClick={() => setCountOne(countOne + 1)}>{countOne} Increment one</Button>
                    <br />{isEven ? 'Even' : 'odd'}
                    <br />
                    <Button variant='primary' onClick={() => setCountTwo(countTwo + 1)}>{countTwo} Increment Two</Button>
                    <PlusMinusMemo data={data} />
                </> : <>
                    <Button variant='success' onClick={() => dispatch(decrement(1, res[0] - 1))}>-Decrement</Button>
                    <span>&nbsp;{res[0]}&nbsp;</span>
                    <Button variant='primary' onClick={() => dispatch(increment(2, res[0] + 1))}>+Increment</Button>
                    <div style={{ textColor: 'red' }}>{res[1]}</div>
                </>
            }

        </>

    );
}

export default PlusMinus;