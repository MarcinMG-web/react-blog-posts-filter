import { Post } from '../types/interface';
import { Stack, Box, Typography, Skeleton, Card } from '@mui/joy';
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

  // Find the selected author if there is one
  const displayAuthor = authors.find(({ id }) => id === selectedAuthor)?.name;

  // Create a new array where each post has the corresponding author
  const postsWithAuthors = filteredPosts.map((post, index) => {
    const author = selectedAuthor ? displayAuthor : authors[index % authors.length]?.name;
    return { ...post, author };
  });

  return (
    <>
      <Stack spacing={2} sx={{ maxWidth: '100vw' }}>
        {postsWithAuthors.map(({ id, title, body, author }) => (
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
    </>
  );
}
