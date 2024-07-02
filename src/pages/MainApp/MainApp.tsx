import AuthorFilter from '../../components/AuthorFilter';
import PostList from '../../components/PostList';
import useAuthors from '../../hooks/useAuthors';
import usePosts from '../../hooks/usePosts';
import { Post } from '../../types/interface';
import { useAppState } from '../../context/AppState';

export default function MainApp(): JSX.Element {
  const {
    state: { selectedAuthor },
  } = useAppState();

  const { posts, loading: postsLoading, error: postsError } = usePosts();
  const { loading: authorsLoading, error: authorsError } = useAuthors();

  const filteredPosts: Post[] = selectedAuthor ? posts.filter((post) => post.userId === selectedAuthor) : posts;

  if (postsLoading || authorsLoading) {
    return <div>Loading...</div>;
  }

  if (postsError || authorsError) {
    return <div>{postsError || authorsError}</div>;
  }

  return (
    <div>
      <AuthorFilter />
      <PostList posts={filteredPosts} />
    </div>
  );
}
