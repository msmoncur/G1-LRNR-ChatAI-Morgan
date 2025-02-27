import React from 'react'; // Add this line
import { render, screen } from '@testing-library/react';
import Result from '../pages/Result.jsx';

describe('Result Component', () => {
    it('renders the result message and button', () => {
        render(<Result />);

        // Check for the result title
        expect(screen.getByText('Irnr')).toBeInTheDocument();

        // Check for the questions right message
        expect(screen.getByText('Questions Right: 0111')).toBeInTheDocument();

        // Check for the button
        expect(screen.getByText('TRY ANOTHER QUIZ')).toBeInTheDocument();
    });
});