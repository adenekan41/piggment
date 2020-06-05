import React from 'react';
import SEO from 'components/seo';
import DataProvider from 'context/provider';
import Routes from './routes';

const App = () => {
	return (
		<>
			<SEO />
			<DataProvider>
				<Routes />
			</DataProvider>
		</>
	);
};

export default App;
