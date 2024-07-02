import { ChangeEvent } from 'react';
import { useAppState } from '../context/AppState';
import useAuthors from '../hooks/useAuthors';

export default function AuthorFilter() {
  const { authors } = useAuthors();
  const { dispatch } = useAppState();

  const handleOnChange = (e: ChangeEvent<HTMLSelectElement>) =>
    dispatch({ type: 'SET_SELECTED_AUTHOR', payload: Number(e.target.value) });

  return (
    <select onChange={(e) => handleOnChange(e)}>
      <option value=''>All Authors</option>
      {authors.map((author) => (
        <option key={author.id} value={author.id}>
          {author.name}
        </option>
      ))}
    </select>
  );
}
