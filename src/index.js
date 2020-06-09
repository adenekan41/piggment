/* -------------------------------------------------------------------------- */
/*                            External Dependencies                           */
/* -------------------------------------------------------------------------- */

import React from 'react';
import ReactDOM from 'react-dom';
import { HelmetProvider } from 'react-helmet-async';
import { Router } from 'react-router-dom';

/* -------------------------- Internal Dependencies ------------------------- */

import App from 'App';
import * as serviceWorker from './utils/serviceWorker';
import history from './utils/history';

/* ---------------------------- Style Dependency ---------------------------- */

import './assets/styles/index.css';

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
