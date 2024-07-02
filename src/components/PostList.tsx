import { Post } from '../types/interface';

interface PostListProps {
  posts: Post[];
}

export default function PostList({ posts }: PostListProps) {
  return (
    <ul>
      {posts.map(({ id, title, body }) => (
        <li key={id}>
          <h2>{title}</h2>
          <p>{body}</p>
        </li>
      ))}
    </ul>
  );
}
