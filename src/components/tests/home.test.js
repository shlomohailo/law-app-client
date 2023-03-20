import { render, screen, cleanup } from '@testing-library/react';
import Home from '../pages/home/home';

describe("home tests", () => {
    test('test 1', () => {
        render(<Home />);
        const homeElement = screen.getByTestId("home-id");
        expect(homeElement).toBeInTheDocument();
})})

// import React from 'react';
// import { render } from '@testing-library/react';

// describe('MyComponent', () => {
//   it('renders without crashing', () => {
//     const { getByText } = render(<Home />);
//     expect(getByText('test')).toBeInTheDocument();
//   });
// });
