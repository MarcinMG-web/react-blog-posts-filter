import { useState, useEffect } from 'react';
import { fetchRequestAuthors } from '../api/requests';
import { Author } from '../types/interface';

export default function useAuthors() {
  const [authors, setAuthors] = useState<Author[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchAuthors = async () => {
      try {
        const { data } = await fetchRequestAuthors();
        setAuthors(data);
      } catch (errors) {
        setError('Failed to fetch authors');
      } finally {
        setLoading(false);
      }
    };

    fetchAuthors();
  }, []);

  return { authors, loading, error };
}
