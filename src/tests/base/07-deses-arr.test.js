import { retornaArreglo } from "../../bases/07-deses-arr";

describe('Pruebas en desestructuracion ' , () => {


    test('Debe retornar un string y un number' , () => {

        const [string , number] = retornaArreglo();
    
        expect(string).toEqual('ABC')
        expect(number).toEqual(123)
    })
})