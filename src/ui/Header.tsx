import { Box, Typography, Skeleton } from '@mui/joy';
import ColorSchemeToggle from './ColorSchemeToggle';
import AuthorFilter from '../components/AuthorFilter';
import { useAppState } from '../context/AppState';
import { useTheme } from '@mui/joy/styles';
import { neonAnimation } from './utils';

export default function Header(): JSX.Element {
  const {
    state: { loading },
  } = useAppState();

  const theme = useTheme();

  return (
    <Box
      component='header'
      sx={{
        py: 3,
        display: 'flex',
        justifyContent: 'space-between',
      }}
    >
      <style>{neonAnimation}</style>
      <Skeleton variant='rectangular' width={100} height={40} loading={loading}>
        <ColorSchemeToggle />
      </Skeleton>

      <Typography
        level='h1'
        sx={{
          gap: 2,
          display: 'flex',
          alignItems: 'center',
          animation: 'neon 1.5s infinite alternate',
          color: theme.palette.mode === 'light' ? '#FFFFFF' : theme.palette.mode === 'dark' ? '#FFFFFF' : '#000000',
          fontSize: '2.5rem',
          fontWeight: 'bold',
        }}
      >
        <Skeleton variant='rectangular' width={250} height={40} loading={loading}>
          Blog Post App
        </Skeleton>
      </Typography>

      <Skeleton variant='rectangular' width={150} height={40} loading={loading}>
        <AuthorFilter />
      </Skeleton>
    </Box>
  );
}
