import React from 'react';
import PropTypes from 'prop-types';

import randomWords from 'random-words';
import GradientContext from '.';

import { generateGradient, guidGenerator, generatepalette } from '../utils';

class DataProvider extends React.PureComponent {
	constructor(props) {
		super(props);
		this.state = {
			gradient: [],
			palette: [],
		};
	}

	gradient = (amount) => {
		for (let i = 0; i < amount; i++) {
			this.setState((previousState) => ({
				gradient: [
					...previousState.gradient,
					{
						id: guidGenerator(),
						name: randomWords({ exactly: 2, join: ' ' }),
						color: generateGradient(),
					},
				],
			}));
		}
	};

	clearGradient = () => this.setState({ gradient: [], palette: [] });

	loadpalettes = (amount) => {
		for (let i = 0; i < amount; i++) {
			this.setState((previousState) => ({
				palette: [...previousState.palette, generatepalette()],
			}));
		}
	};

	render() {
		const { children } = this.props;
		return (
			<GradientContext.Provider
				value={{
					state: this.state.gradient,
					palette: this.state.palette,
					loadpalettes: this.loadpalettes,
					loadGradients: this.gradient,
					clearGradient: this.clearGradient,
				}}
			>
				{children}
			</GradientContext.Provider>
		);
	}
}

DataProvider.propTypes = {
	children: PropTypes.oneOfType([PropTypes.node, PropTypes.element]),
};

export default DataProvider;
