
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

let lastViewportWidth = window.innerWidth;

const setViewportHeightUnit = () => {
  document.documentElement.style.setProperty('--vh', `${window.innerHeight * 0.01}px`);
};

const handleResize = () => {
  // Мобильные браузеры (Safari/Telegram in-app) шлют resize при скрытии/показе
  // адресной строки — высота меняется, ширина нет. Пересчитываем --vh только
  // при реальном ресайзе/повороте, иначе фон "прыгает" при скролле.
  if (window.innerWidth !== lastViewportWidth) {
    lastViewportWidth = window.innerWidth;
    setViewportHeightUnit();
  }
};

setViewportHeightUnit();
window.addEventListener('resize', handleResize);
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
