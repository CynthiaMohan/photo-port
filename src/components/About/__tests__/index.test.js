import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

// Import the About component
import About from '../../About';

//call the cleanup function using the afterEach global function from Jest
afterEach(cleanup);
//This will ensure that after each test, we won't have any leftover memory data that could give us false results.
describe('About component', () => {
    //renders About test
    //First test :- will be the baseline to verify that the component is rendering.
    it('renders', () => {
        render(<About />);
    });
    //second test
    it('matches snapshot DOM node structure', () => {
        const { asFragment } = render(<About />);
        expect(asFragment()).toMatchSnapshot();
    });
})

