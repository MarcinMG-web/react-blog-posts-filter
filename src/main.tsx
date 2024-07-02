import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import { AppProvider } from './context/AppState.tsx';
import { CssVarsProvider } from '@mui/joy';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <AppProvider>
      <CssVarsProvider defaultMode='dark' disableTransitionOnChange>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </CssVarsProvider>
    </AppProvider>
  </React.StrictMode>,
);
