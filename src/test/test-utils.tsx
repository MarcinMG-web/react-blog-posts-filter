import { RenderOptions, render as rtlRender } from '@testing-library/react';

// import i18n from '../i18n';
import { CssVarsProvider } from '@mui/joy';
import { theme } from '../theme';
import { AppProvider } from '../context/AppState';
import { BrowserRouter } from 'react-router-dom';

function render(ui: React.ReactElement, options?: Omit<RenderOptions, 'queries'>) {
  return rtlRender(ui, {
    wrapper: ({ children }) => (
      // <I18nextProvider>
      <BrowserRouter>
        <AppProvider>
          <CssVarsProvider theme={theme}>{children}</CssVarsProvider>
        </AppProvider>
      </BrowserRouter>
      // </I18nextProvider>
    ),
    ...options,
  });
}

// eslint-disable-next-line react-refresh/only-export-components
export * from '@testing-library/react';
export { render };
