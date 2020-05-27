import React from 'react';

const GradientContext = React.createContext({
	state: [],
	loadGradients: () => {},
	clearGradient: () => {},
});

export default GradientContext;
