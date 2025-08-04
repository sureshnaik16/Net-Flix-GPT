import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode> {/* in development phase it renders two time for checking any errors but in build phase
    it renders for a single time. */}
    <App />
  </React.StrictMode>
);

reportWebVitals();
