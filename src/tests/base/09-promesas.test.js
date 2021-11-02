import { getHeroeByIdAsync } from "../../bases/09-promesas"
import heroes from "../../bases/data/heroes";




describe('Haciendo pruebas async' , () => {

    test('getHeroeByIdAsync retornara un heroe async' , (done) => {

        const id = 1;

        getHeroeByIdAsync(id)
        .then( heroe => {

            expect(heroe).toBe(heroes[0])
            done()
        })

    })


    test('getHeroeByIdAsync retornara un heroe async 2' , (done) => {

        const id = 10;

        getHeroeByIdAsync(id)
        .catch( error => {

            expect(error).toBe('No se pudo encontrar el héroe')
            done()
        })

    })
})