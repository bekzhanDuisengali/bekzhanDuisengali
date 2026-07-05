
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const setViewportHeightUnit = () => {
  document.documentElement.style.setProperty('--vh', `${window.innerHeight * 0.01}px`);
};

setViewportHeightUnit();
window.addEventListener('resize', setViewportHeightUnit);
window.addEventListener('orientationchange', setViewportHeightUnit);

const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error("Could not find root element to mount to");
}

const root = ReactDOM.createRoot(rootElement);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
