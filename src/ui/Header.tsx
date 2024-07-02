import { Box, Typography } from '@mui/joy';
import ColorSchemeToggle from '../components/ColorSchemeToggle';
import AuthorFilter from '../components/AuthorFilter';

export default function Header(): JSX.Element {
  return (
    <Box
      component='header'
      sx={{
        py: 3,
        display: 'flex',
        justifyContent: 'space-between',
      }}
    >
      <ColorSchemeToggle />
      <Typography level='title-lg' sx={{ gap: 2, display: 'flex', alignItems: 'center' }}>
        Blog Post App
      </Typography>

      <AuthorFilter />
    </Box>
  );
}
