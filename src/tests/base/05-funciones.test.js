import { getUser, getUsuarioActivo} from "../../bases/05-funciones";


describe('Pruebas en 05-funciones' , ( ) => {


    test('getUser debe retornar un objeto' , () => {

        const userTest = {
            uid: 'ABC123',
        username: 'El_Papi1502'
        }

        const user = getUser();

        expect(user).toEqual(userTest)
    })

    test('getUsuarioActivo retorna objeto' , () => {

        const nombre = "jose"
        
        const userTesting = {
            uid: 'ABC567',
        username: nombre
        }

       

        const usuario = getUsuarioActivo(nombre)

        expect(usuario).toEqual(userTesting)
    })
})