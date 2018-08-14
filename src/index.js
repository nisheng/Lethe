import React from 'react';
import ReactDOM from 'react-dom';
import { Router, browserHistory, hashHistory } from 'react-router';
import routeConfig from './router';

ReactDOM.render((
    <Router history={browserHistory} routes={routeConfig}></Router>
), document.querySelector('#root'));
