import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './pages/AppPage.tsx';
import './index.css';   // Tailwind directives

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
