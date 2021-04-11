import React from 'react';
import ReactDOM from 'react-dom';
import App from './views/App';
import ScopedCssBaseline from '@material-ui/core/ScopedCssBaseline';
import './scss/style.scss'

ReactDOM.render(
  <React.StrictMode>
    <ScopedCssBaseline>
      <App />
    </ScopedCssBaseline>
  </React.StrictMode>,
  document.getElementById('root')
);
