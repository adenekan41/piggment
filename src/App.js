/* -------------------------------------------------------------------------- */
/*                             External Dependency                            */
/* -------------------------------------------------------------------------- */

import React from 'react';

/* -------------------------- Internal Dependencies ------------------------- */

import SEO from 'components/seo';
import DataProvider from 'context/provider';
import SnarkBar from 'components/snark-bar';
import Routes from './routes';

const App = () => {
	return (
		<>
			<SEO />
			<DataProvider>
				<SnarkBar />
				<Routes />
			</DataProvider>
		</>
	);
};

export default App;
