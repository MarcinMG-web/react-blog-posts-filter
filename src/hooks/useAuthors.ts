import { useState, useEffect } from 'react';
import { fetchRequestAuthors } from '../api/requests';
import { Author } from '../types/interface';

export default function useAuthors() {
  const [authors, setAuthors] = useState<Author[]>([]);
  const [authorsLoading, setAuthorsLoading] = useState<boolean>(true);
  const [authorsError, setAuthorsError] = useState<string | null>(null);

  useEffect(() => {
    const fetchAuthors = async () => {
      try {
        const { data } = await fetchRequestAuthors();
        setAuthors(data);
      } catch (errors) {
        setAuthorsError('Failed to fetch authors');
      } finally {
        setAuthorsLoading(false);
      }
    };

    fetchAuthors();
  }, []);

  return { authors, authorsLoading, authorsError };
}
