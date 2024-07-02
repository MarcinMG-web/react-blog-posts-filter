import PostList from '../../components/PostList';
import useAuthors from '../../hooks/useAuthors';
import usePosts from '../../hooks/usePosts';
import { Post } from '../../types/interface';
import { useAppState } from '../../context/AppState';
import Header from '../../ui/Header';
import CssBaseline from '@mui/joy/CssBaseline';

export default function MainApp(): JSX.Element {
  const {
    state: { selectedAuthor },
    dispatch,
  } = useAppState();

  const { posts, postsLoading, postsError } = usePosts();
  const { authorsLoading, authorsError } = useAuthors();

  const filteredPosts: Post[] = selectedAuthor ? posts.filter((post) => post.userId === selectedAuthor) : posts;

  if (!postsLoading || !authorsLoading) {
    dispatch({ type: 'SET_LOADING', payload: false });
    // return <div>Loading...</div>;
  }

  if (postsError || authorsError) {
    return <div>{postsError || authorsError}</div>;
  }

  return (
    <div>
      <CssBaseline />
      <Header />
      {/* <AuthorFilter /> */}
      <PostList filteredPosts={filteredPosts} />
    </div>
  );
}
