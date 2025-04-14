import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import Home from './pages/home';

const rootElement = document.getElementById('root');

createRoot(rootElement).render(
  <StrictMode>
    <Home />
  </StrictMode>
);