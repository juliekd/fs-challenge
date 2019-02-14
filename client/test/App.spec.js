import React from 'react';
import App from '../App';


describe('App Component', () => {
    it('renders h1', () => {
        const wrapper = shallow(<App />);
        expect(wrapper.find('h2').text()).toEqual('Enter a value');
    });
});