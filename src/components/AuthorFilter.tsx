import { Author } from '../types/interface';

interface AuthorFilterProps {
  authors: Author[];
  onFilterChange: (authorId: number) => void;
}

export default function AuthorFilter({ authors, onFilterChange }: AuthorFilterProps) {
  return (
    <select onChange={(e) => onFilterChange(Number(e.target.value))}>
      <option value=''>All Authors</option>
      {authors.map((author) => (
        <option key={author.id} value={author.id}>
          {author.name}
        </option>
      ))}
    </select>
  );
}
