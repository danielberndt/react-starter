import 'babel-core/polyfill';
import 'normalize.css/normalize.css';
import './style.css';

import React from 'react';
import ReactDOM from 'react-dom';
import MyComponent from './my-component';

window.document.addEventListener('DOMContentLoaded', () => {
  const appEl = window.document.getElementById('app');
  ReactDOM.render(<MyComponent/>, appEl);
});
