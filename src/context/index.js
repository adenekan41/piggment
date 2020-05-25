import React from 'react';

export const GradientContext = React.createContext({
	state: [],
	loadGradients: () => {},
	clearGradient: () => {},
});
