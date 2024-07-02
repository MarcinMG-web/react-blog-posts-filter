import { useState, useEffect } from 'react';
import { fetchRequestPosts } from '../api/requests';
import { Post } from '../types/interface';

export default function usePosts() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const { data } = await fetchRequestPosts();
        setPosts(data);
      } catch (errors) {
        setError('Failed to fetch posts');
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  return { posts, loading, error };
}
