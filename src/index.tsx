import 'react-app-polyfill/ie11';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './component/App/App';
import * as serviceWorker from './serviceWorker';

import './normalize.css';
import './index.style.scss'
import {BrowserRouter} from "react-router-dom";

ReactDOM.render(
  (<BrowserRouter>
      <App/>
    </BrowserRouter>),
  document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
