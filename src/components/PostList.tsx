import { useEffect, useState } from 'react';
import { Post } from '../types/interface';
import { Stack, Box, Typography, Skeleton, Card, Button } from '@mui/joy'; // Assuming you have MUI v5 imports
import useAuthors from '../hooks/useAuthors';
import { useAppState } from '../context/AppState';

interface PostListProps {
  filteredPosts: Post[];
}

export default function PostList({ filteredPosts }: PostListProps) {
  const { authors } = useAuthors();
  const {
    state: { selectedAuthor, loading },
  } = useAppState();

  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 3;

  useEffect(() => {
    setCurrentPage(1);
  }, [selectedAuthor]);

  // Find the selected author if there is one
  const displayAuthor = authors.find(({ id }) => id === selectedAuthor)?.name;

  // Create a new array where each post has the corresponding author
  const postsWithAuthors = filteredPosts.map((post, index) => {
    const author = selectedAuthor ? displayAuthor : authors[index % authors.length]?.name;
    return { ...post, author };
  });

  // Calculate the posts to be displayed on the current page
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = postsWithAuthors.slice(indexOfFirstPost, indexOfLastPost);

  const handleNextPage = () => {
    if (indexOfLastPost < postsWithAuthors.length) {
      setCurrentPage((prevPage) => prevPage + 1);
    }
  };

  const handlePreviousPage = () => {
    if (indexOfFirstPost > 0) {
      setCurrentPage((prevPage) => prevPage - 1);
    }
  };

  const disabledPreviousPage = indexOfFirstPost === 0;
  const disabledNextPage = indexOfLastPost >= postsWithAuthors.length;

  return (
    <>
      <Stack spacing={2} sx={{ maxWidth: '100vw' }}>
        {currentPosts.map(({ id, title, body, author }) => (
          <Box key={id}>
            <Card variant='outlined'>
              <Typography level='h1'>
                <Skeleton loading={loading}> {author}</Skeleton>
              </Typography>

              <Typography level='h2' fontSize='xl' sx={{ mb: 0.5 }}>
                <Skeleton loading={loading}> {title}</Skeleton>
              </Typography>

              <Typography>
                <Skeleton loading={loading}>{body}</Skeleton>
              </Typography>
            </Card>
          </Box>
        ))}
      </Stack>

      <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 2 }}>
        <Skeleton variant='rectangular' width={100} height={36} loading={loading}>
          <Button onClick={handlePreviousPage} disabled={disabledPreviousPage}>
            Previous
          </Button>
        </Skeleton>
        <Skeleton variant='rectangular' width={100} height={36} loading={loading}>
          <Button onClick={handleNextPage} disabled={disabledNextPage}>
            Next
          </Button>
        </Skeleton>
      </Box>
    </>
  );
}
