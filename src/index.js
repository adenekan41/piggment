import React from 'react';
import ReactDOM from 'react-dom';
import './assets/styles/index.css';
import App from 'App';
import { Router } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';

import * as serviceWorker from './utils/serviceWorker';
import history from './utils/history';

ReactDOM.hydrate(
	<HelmetProvider>
		<Router history={history}>
			<App />
		</Router>
	</HelmetProvider>,
	document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
