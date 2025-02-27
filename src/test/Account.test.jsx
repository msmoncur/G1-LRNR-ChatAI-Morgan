import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import Account from '../pages/Account'; // Adjust this path if needed

describe('Account Component', () => {
    it('renders the streak, quizzes, and level sections', () => {
        render(<Account />);

        // Check for the streak section
        expect(screen.getByText('Streak')).toBeInTheDocument();
        expect(screen.getByText('You have a streak of 5 days!')).toBeInTheDocument();

        // Check for the quizzes section
        expect(screen.getByText('Platinum Quizzes')).toBeInTheDocument();
        expect(screen.getByText('golang - intermediate')).toBeInTheDocument();
        expect(screen.getByText('Javascript - beginner')).toBeInTheDocument();
        expect(screen.getByText('AWS - beginner')).toBeInTheDocument();

        // Check for the lrnr level section
        expect(screen.getByText('Irnr Level: 2')).toBeInTheDocument();
        expect(screen.getByText('151/200 xp')).toBeInTheDocument();
    });
});