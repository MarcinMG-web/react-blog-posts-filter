import { useState } from 'react';
import AuthorFilter from '../../components/AuthorFilter';
import PostList from '../../components/PostList';
import useAuthors from '../../hooks/useAuthors';
import usePosts from '../../hooks/usePosts';

export default function MainApp(): JSX.Element {
  const { posts, loading: postsLoading, error: postsError } = usePosts();
  const { authors, loading: authorsLoading, error: authorsError } = useAuthors();

  const [selectedAuthor, setSelectedAuthor] = useState<number | null>(null);

  const handleFilterChange = (authorId: number) => {
    setSelectedAuthor(authorId);
  };

  const filteredPosts = selectedAuthor ? posts.filter((post) => post.userId === selectedAuthor) : posts;

  if (postsLoading || authorsLoading) {
    return <div>Loading...</div>;
  }

  if (postsError || authorsError) {
    return <div>{postsError || authorsError}</div>;
  }

  return (
    <div>
      <AuthorFilter authors={authors} onFilterChange={handleFilterChange} />
      <PostList posts={filteredPosts} />
    </div>
  );
}
