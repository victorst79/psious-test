import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from "react-router-dom";
import { App } from './views/App';
import { News } from './views/News';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Route exact path="/" component={App} />
      <Route  path="/news" component={News} />
   </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
