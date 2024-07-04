import { renderHook, waitFor } from '@testing-library/react';
import { fetchRequestPosts } from '../api/requests';
import usePosts from '../hooks/usePosts';
import { Post } from '../types/interface';

// Mock the fetchRequestPosts function
vi.mock('../api/requests', () => ({
  fetchRequestPosts: vi.fn(),
}));

describe('usePosts hooks', () => {
  it('should fetch posts successfully', async () => {
    const mockPosts: Post[] = [
      { id: 1, userId: 1, title: 'Post 1', body: 'Body 1' },
      { id: 2, userId: 2, title: 'Post 2', body: 'Body 2' },
    ];

    // Mock the API function to return the mock posts
    (fetchRequestPosts as jest.Mock).mockResolvedValue({ data: mockPosts });

    const { result, rerender } = renderHook(() => usePosts());

    // Initial state
    expect(result.current.postsLoading).toBe(true);
    expect(result.current.posts).toEqual([]);
    expect(result.current.postsError).toBe(null);

    // Wait for the loading to finish and the posts to be set
    await waitFor(() => expect(result.current.postsLoading).toBe(false));

    // Check if the state updates correctly
    expect(result.current.posts).toEqual(mockPosts);
    expect(result.current.postsError).toBe(null);

    // Mock the API function again for the second fetch
    (fetchRequestPosts as jest.Mock).mockResolvedValue({ data: mockPosts });

    // Trigger a re-fetch
    rerender();

    // Wait for the loading to finish and the posts to be set after the second fetch
    await waitFor(() => expect(result.current.postsLoading).toBe(false));

    // Check if the state updates correctly after the second fetch
    expect(result.current.posts).toEqual(mockPosts);
    expect(result.current.postsError).toBe(null);
  });

  it('should handle fetch error', async () => {
    (fetchRequestPosts as jest.Mock).mockRejectedValueOnce(new Error('Failed to fetch'));

    const { result } = renderHook(() => usePosts());

    // Initial state
    expect(result.current.postsLoading).toBe(true);
    expect(result.current.posts).toEqual([]);
    expect(result.current.postsError).toBe(null);

    // Wait for the error to be handled and state to update
    await waitFor(() => expect(result.current.postsLoading).toBe(false));

    // Check if the state updates correctly after the error
    expect(result.current.posts).toEqual([]);
    expect(result.current.postsError).toBe('Failed to fetch posts');
  });
});
