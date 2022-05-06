import React from 'react';
import {connect, useSelector, useDispatch} from 'react-redux';
import {increase, decrease} from '@/modules/basic/counter';
import {Counter} from '@/components/basic/Counter';

const CounterPage = () => {
    const number = useSelector(state => state.counter.number)
    const dispatch = useDispatch()
    const onIncrease = e => {
        e.preventDefault()
        alert('+')
        dispatch(increase())
    }
    const onDecrease = e => {
        e.preventDefault()
        alert('-')
        dispatch(decrease())
    }
    
    return (
        <Counter number={number} onIncrease={onIncrease} onDecrease={onDecrease}/>
    );
};

/**
const mapStateToProps = state => ({number: state.counter});
const counterActions = {
    increase,
    decrease
}
export default connect(mapStateToProps, counterActions)(CounterPage);
 */
export default CounterPage