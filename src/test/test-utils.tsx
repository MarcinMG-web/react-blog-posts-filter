import { RenderOptions, render as rtlRender } from '@testing-library/react';

import { CssVarsProvider } from '@mui/joy';
import { theme } from '../theme';
import { AppProvider } from '../context/AppState';
import { BrowserRouter } from 'react-router-dom';

function render(ui: React.ReactElement, options?: Omit<RenderOptions, 'queries'>) {
  return rtlRender(ui, {
    wrapper: ({ children }) => (
      <BrowserRouter>
        <AppProvider>
          <CssVarsProvider theme={theme}>{children}</CssVarsProvider>
        </AppProvider>
      </BrowserRouter>
    ),
    ...options,
  });
}

// eslint-disable-next-line react-refresh/only-export-components
export * from '@testing-library/react';
export { render };
