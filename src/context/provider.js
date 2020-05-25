import React from 'react';
import PropTypes from 'prop-types';

import { GradientContext } from '.';
import randomWords from 'random-words';

import { generateGradient, guidGenerator } from '../utils';

class DataProvider extends React.PureComponent {
	constructor(props) {
		super(props);
		this.state = {
			gradient: [],
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

	clearGradient = () => this.setState({ gradient: [] });

	render() {
		const { children } = this.props;
		return (
			<GradientContext.Provider
				value={{
					state: this.state.gradient,
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
