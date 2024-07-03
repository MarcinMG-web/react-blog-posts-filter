import { Box, Typography, Skeleton } from '@mui/joy';
import ColorSchemeToggle from './ColorSchemeToggle';
import AuthorFilter from '../components/AuthorFilter';
import { useAppState } from '../context/AppState';

export default function Header(): JSX.Element {
  const {
    state: { loading },
  } = useAppState();

  return (
    <Box
      component='header'
      sx={{
        py: 3,
        display: 'flex',
        justifyContent: 'space-between',
      }}
    >
      {loading ? <Skeleton variant='rectangular' width={100} height={40} /> : <ColorSchemeToggle />}

      <Typography
        level='h1'
        sx={{
          gap: 2,
          display: 'flex',
          alignItems: 'center',
          '@keyframes neon': {
            '0%': {
              textShadow:
                '0 0 5px #ff8c00, 0 0 10px #ff8c00, 0 0 20px #ff8c00, 0 0 30px #ff8c00, 0 0 40px #ff8c00, 0 0 50px #ff8c00, 0 0 60px #ff8c00',
            },
            '50%': {
              textShadow:
                '0 0 10px #ff8c00, 0 0 20px #ff8c00, 0 0 30px #ff8c00, 0 0 40px #ff8c00, 0 0 50px #ff8c00, 0 0 60px #ff8c00, 0 0 70px #ff8c00',
            },
            '100%': {
              textShadow:
                '0 0 5px #ff8c00, 0 0 10px #ff8c00, 0 0 20px #ff8c00, 0 0 30px #ff8c00, 0 0 40px #ff8c00, 0 0 50px #ff8c00, 0 0 60px #ff8c00',
            },
          },
          animation: 'neon 1.5s infinite alternate',
        }}
      >
        {loading ? <Skeleton variant='text' width={200} /> : 'Blog Post App'}
      </Typography>
      {loading ? <Skeleton variant='rectangular' width={150} height={40} /> : <AuthorFilter />}
    </Box>
  );
}
