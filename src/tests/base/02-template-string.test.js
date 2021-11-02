import { getSaludo } from "../../bases/02-template-string";

describe('pruebas en 02-template-string' , () => {

     test('getSaludo debe retonar Hola Fernando' , () => {

        const nombre = 'Fernando'
        
        const saludo = getSaludo(nombre)
 
        expect(saludo).toBe('Hola ' + nombre)
    
     })

     test('getSaludo debe retonar Hola Fernando' , () => {

        const saludo = getSaludo()

        expect(saludo).toBe('Hola Carlos')

     })


})