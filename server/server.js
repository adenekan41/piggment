import path from 'path';
import fs from 'fs';

import React from 'react';
import express from 'express';
import ReactDOMServer from 'react-dom/server';

import App from '../src/App';
import { Router } from 'react-router-dom';
import history from '../src/utils/history';

const PORT = process.env.PORT || 3006;
const app = express();

app.get('^/$', (req, res) => {
	const apps = ReactDOMServer.renderToString(
		<Router history={history}>
			<App />
		</Router>
	);

	const indexFile = path.resolve('./build/index.html');
	fs.readFile(indexFile, 'utf8', (err, data) => {
		if (err) {
			console.error('Something went wrong:', err);
			return res.status(500).send('Oops, better luck next time!');
		}

		return res.send(
			data.replace('<div id="root"></div>', `<div id="root">${apps}</div>`)
		);
	});
});

app.use(express.static(path.resolve(__dirname, '..', 'build')));

app.listen(PORT, () => {
	console.log(`😎 Server is listening on port ${PORT}`);
});
