import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './static/sass/helpers/_helpers.scss';
import './static/sass/Components/_components.scss';
import App from './App';

ReactDOM.render(
<BrowserRouter> <App /></BrowserRouter>, document.getElementById('root'));