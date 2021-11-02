 import { getHeroeById , getHeroesByOwner} from '../../bases/08-imp-exp'
 


describe('Prueba en imp-exp' , () => {

    test('Debe retornar un heroe' , () => {

        const id = 1
         const heroe = getHeroeById(id) 
        
         const heroeEncontrado = heroes.find(heroe => {
            return heroe.id == id
        })
    })
})
    
 
        
