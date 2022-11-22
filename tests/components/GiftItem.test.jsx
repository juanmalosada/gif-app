import { render, screen } from "@testing-library/react";
import { GiftItem } from "../../src/components";

describe ('Pruebas en <GiftItem.jsx />', () => {

    const titulo = 'Un titulo';
    const url = 'https://localhost/algo.jpg';

/*     test('Debe de hacer match con el snapshot', () => {

        const { container } = render ( <GiftItem title={ titulo } url={ url } /> );

        expect ( container ).toMatchSnapshot();

    }); */

    test('Debe mostrar la imagen con el URL y el ALT indicado', () => {
            
            render ( <GiftItem title={ titulo } url={ url } /> );
    
            const { src, alt } = screen.getByRole('img');

            expect ( src ).toBe( url );
            expect ( alt ).toBe( titulo );
    
        });

});
