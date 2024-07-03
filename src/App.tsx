import { Routes, Route } from 'react-router-dom';
import RoutesEnum from './types/routesEnum';
import MainApp from './pages/MainApp';
import ErrorsPages from './pages/ErrorPages';
import { CssVarsProvider } from '@mui/joy';
import { theme } from './theme';

export default function App(): JSX.Element {
  const routes = [
    {
      path: RoutesEnum.APP,
      component: <MainApp />,
    },
    {
      path: RoutesEnum.ANYTHING,
      component: <ErrorsPages errorCode={404} />,
    },
  ];

  return (
    <>
      <CssVarsProvider theme={theme} defaultMode='dark' disableTransitionOnChange>
        <Routes>
          {routes.map(({ path, component }) => (
            <Route path={path} element={component} key={path} />
          ))}
        </Routes>
      </CssVarsProvider>
    </>
  );
}
