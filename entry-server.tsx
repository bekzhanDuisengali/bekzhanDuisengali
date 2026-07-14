import { renderToStaticMarkup } from 'react-dom/server';
import React from 'react';
import App from './App';

export function render() {
  return renderToStaticMarkup(React.createElement(App));
}
