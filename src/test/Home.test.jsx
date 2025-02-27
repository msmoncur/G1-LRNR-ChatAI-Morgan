import React from 'react'; // Add this line
import { render, screen } from '@testing-library/react';
import Home from '../pages/Home.jsx';

describe('Home Component', () => {
    it('renders the logo and heading', () => {
        render(<Home />);

        // Check for the logo
        expect(screen.getByText('lrnr')).toBeInTheDocument();
        expect(screen.getByText('🐢')).toBeInTheDocument();

        // Check for the heading
        expect(
            screen.getByText('Your guided path to programming enlightenment')
        ).toBeInTheDocument();

        // Check for the button
        expect(screen.getByText('BEGIN JOURNEY')).toBeInTheDocument();
    });
});