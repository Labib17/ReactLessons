import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './jsx-version/App'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

// import React, { StrictMode, createElement } from 'react';
// import { createRoot } from 'react-dom/client';
// import App from './createElement/App';

// createRoot(document.getElementById('root')).render(
//   createElement(StrictMode, null, createElement(App))
// );
