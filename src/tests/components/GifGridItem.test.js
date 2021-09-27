import React from 'react';
import { shallow } from 'enzyme';
import { GifGridItem } from '../../components/GifGridItem';


describe('Pruebas en <GifGridItem />', () => {

    const title = 'Un título';
    const url   = 'https://localhost/algo.jpg';
    const wrapper = shallow( <GifGridItem title={ title } url={ url } /> );

    
    test('debe de mostrar el componente correctamente', () => {
        

        expect( wrapper ).toMatchSnapshot();

    })})