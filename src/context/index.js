/* --------------------------- External Dependency -------------------------- */
import React from 'react';

const GradientContext = React.createContext({
	state: [],
	palette: [],
	snarkbars: [],
	setSnarkbar: () => {},
	removeSnarkbar: () => {},
	loadpalettes: () => {},
	loadGradients: () => {},
	clearGradient: () => {},
});

export default GradientContext;
