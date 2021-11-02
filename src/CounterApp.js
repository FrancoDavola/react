import React, { useState } from "react";
import PropTypes from 'prop-types'

const CounterApp = ({value}) => {

    const [counter , setCounter] = useState(value)

    return (
        <>
        <h1>Contador</h1>
        <h2>{counter}</h2>
        <button onClick={() => setCounter(counter + 1)}>+1</button>
        <button onClick={() => setCounter(counter - 1)}>-1</button>
        <button onClick={() => setCounter(value)}>Reset</button>
    </>
    )

}

CounterApp.propTypes = {
    value : PropTypes.number
}

export default CounterApp