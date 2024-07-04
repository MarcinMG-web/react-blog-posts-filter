import { renderHook, waitFor } from '@testing-library/react';
import { fetchRequestAuthors } from '../api/requests';
import useAuthors from '../hooks/useAuthors';
import { Author } from '../types/interface';

// Mock the fetchRequestAuthors function
vi.mock('../api/requests', () => ({
  fetchRequestAuthors: vi.fn(),
}));

describe('useAuthors hooks', () => {
  it('should fetch authors successfully', async () => {
    const mockAuthors: Author[] = [
      { id: 1, name: 'Jon' },
      { id: 2, name: 'Rambo' },
    ];

    // Mock the API function to return the mock Authors
    (fetchRequestAuthors as jest.Mock).mockResolvedValue({ data: mockAuthors });

    const { result, rerender } = renderHook(() => useAuthors());

    // Initial state
    expect(result.current.authorsLoading).toBe(true);
    expect(result.current.authors).toEqual([]);
    expect(result.current.authorsError).toBe(null);

    // Wait for the loading to finish and the Authors to be set
    await waitFor(() => expect(result.current.authorsLoading).toBe(false));

    // Check if the state updates correctly
    expect(result.current.authors).toEqual(mockAuthors);
    expect(result.current.authorsError).toBe(null);

    // Mock the API function again for the second fetch
    (fetchRequestAuthors as jest.Mock).mockResolvedValue({ data: mockAuthors });

    // Trigger a re-fetch
    rerender();

    // Wait for the loading to finish and the Authors to be set after the second fetch
    await waitFor(() => expect(result.current.authorsLoading).toBe(false));

    // Check if the state updates correctly after the second fetch
    expect(result.current.authors).toEqual(mockAuthors);
    expect(result.current.authorsError).toBe(null);
  });

  it('should handle fetch error', async () => {
    (fetchRequestAuthors as jest.Mock).mockRejectedValueOnce(new Error('Failed to fetch'));

    const { result } = renderHook(() => useAuthors());

    // Initial state
    expect(result.current.authorsLoading).toBe(true);
    expect(result.current.authors).toEqual([]);
    expect(result.current.authorsError).toBe(null);

    // Wait for the error to be handled and state to update
    await waitFor(() => expect(result.current.authorsLoading).toBe(false));

    // Check if the state updates correctly after the error
    expect(result.current.authors).toEqual([]);
    expect(result.current.authorsError).toBe('Failed to fetch authors');
  });
});
