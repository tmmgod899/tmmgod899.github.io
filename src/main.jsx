import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
// Base styles must load before component styles so components can override them.
import './styles/base.css';
import App from './App';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
