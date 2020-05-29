import React from 'react';

const GradientContext = React.createContext({
	state: [],
	palette: [],
	loadpalettes: () => {},
	loadGradients: () => {},
	clearGradient: () => {},
});

export default GradientContext;
