import React from 'react';
import PropTypes from 'prop-types'

const PrimeraApp = ({saludo, titulo}) => {

    return (
        <>
        <h1>{saludo}</h1>
        <h1>{titulo}</h1>
        </>
     ) 
}

PrimeraApp.propTypes = {
    saludo : PropTypes.string.isRequired
}

PrimeraApp.defaultProps = {
    titulo : 'Bienvenidos al isdsdmalaya'

}
export default PrimeraApp