import { getImagen } from "../../bases/11-async-await";

describe ('Probando el async y await' , () => {

    test('Debe retornar una imagen' , async() => {

        const url = await getImagen();
console.log(url)
        expect(url.includes('https://') ).toBe( true )
    })
})