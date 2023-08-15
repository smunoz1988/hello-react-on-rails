// Entry point for the build script in your package.json
import React from 'react';
import "@hotwired/turbo-rails"
import "./controllers"
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './components/App';

ReactDOM.render(
  <BrowserRouter>
    <App />,
  </BrowserRouter>,
  document.getElementById('root')
);