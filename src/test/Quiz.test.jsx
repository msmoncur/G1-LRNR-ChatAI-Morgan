import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import Quiz from '../pages/Quiz'; // Adjust this path if needed

// Mock fetch globally
global.fetch = vi.fn();

describe('Quiz Component', () => {
    beforeEach(() => {
        fetch.mockClear();
    });

    it('renders the quiz form', () => {
        render(<Quiz />);

        // Test that form elements are present
        expect(screen.getByText('Quiz Generation Options')).toBeInTheDocument();
        expect(screen.getByText('Topic')).toBeInTheDocument();
        expect(screen.getByText('Expertise')).toBeInTheDocument();
        expect(screen.getByText('Number of Questions')).toBeInTheDocument();
        expect(screen.getByText('Style of Questions')).toBeInTheDocument();
        expect(screen.getByText('Submit')).toBeInTheDocument();
    });

    it('handles form submission and loading state', async () => {
        fetch.mockResolvedValueOnce({
            json: async () => ({ questions: [{ id: 1, question: 'Test question' }] }),
        });

        render(<Quiz />);

        // Get form elements
        const submitButton = screen.getByText('Submit');

        // Submit the form
        fireEvent.click(submitButton);

        // Check that fetch was called with the correct parameters
        await waitFor(() => {
            expect(fetch).toHaveBeenCalledWith(
                'https://g1-lrnr-chatai.onrender.com/api/questions',
                expect.objectContaining({
                    method: 'POST',
                    headers: expect.any(Object),
                    body: expect.any(String),
                })
            );
        });
    });
});