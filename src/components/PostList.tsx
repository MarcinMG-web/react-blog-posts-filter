import { Post } from '../types/interface';

interface PostListProps {
  filteredPosts: Post[];
}

export default function PostList({ filteredPosts }: PostListProps) {
  return (
    <ul>
      {filteredPosts.map(({ id, title, body }) => (
        <li key={id}>
          <h2>{title}</h2>
          <p>{body}</p>
        </li>
      ))}
    </ul>
  );
}
