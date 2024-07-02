import { Routes, Route } from 'react-router-dom';
import RoutesEnum from './types/routesEnum';
import MainApp from './pages/MainApp';
import ErrorsPages from './pages/ErrorsPages';

export default function App(): JSX.Element {
  const routes = [
    {
      path: RoutesEnum.APP,
      component: <MainApp />,
    },
    {
      path: RoutesEnum.ANYTHING,
      component: <ErrorsPages />,
    },
  ];

  return (
    <>
      <Routes>
        {routes.map(({ path, component }) => (
          <Route path={path} element={component} key={path} />
        ))}
      </Routes>
    </>
  );
}
