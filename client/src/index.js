import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { ContextРrovider } from './Context/Context';

ReactDOM.render(
  <React.StrictMode>
    <ContextРrovider>
      <App />
    </ContextРrovider>
  </React.StrictMode>,
  document.getElementById('root')
);
