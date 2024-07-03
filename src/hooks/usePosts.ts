import { useState, useEffect } from 'react';
import { fetchRequestPosts } from '../api/requests';
import { Post } from '../types/interface';

export default function usePosts() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [postsLoading, setPostsLoading] = useState<boolean>(true);
  const [postsError, setPostsError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const { data } = await fetchRequestPosts();
        setPosts(data);
      } catch (errors) {
        setPostsError('Failed to fetch posts');
      } finally {
        setPostsLoading(false);
      }
    };

    fetchPosts();
  }, []);

  return { posts, postsLoading, postsError };
}
