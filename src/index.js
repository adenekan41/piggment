import React from 'react';
import ReactDOM from 'react-dom';
import './assets/styles/index.css';
import App from 'App';
import { Router } from 'react-router-dom';
import * as serviceWorker from './utils/serviceWorker';
import history from './utils/history';

ReactDOM.hydrate(
	<Router history={history}>
		<App />
	</Router>,
	document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
