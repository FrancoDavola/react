import React from 'react'
import {render} from '@testing-library/react'
import PrimeraApp from '../PrimeraApp'

describe('Probando primeraApp' , () => {

    test('Debe retornar "hola soy goku"' , () => {

        const saludo = 'Hola soy Goku'

        const {getByText} =  render(<PrimeraApp saludo={saludo} />)

       expect(getByText(saludo)).toBeInTheDocument()

    })
})