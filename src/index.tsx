// src/index.tsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App';

const offersCount = 5; // Можно менять это число

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <App offersCount={offersCount} />
  </React.StrictMode>
);
