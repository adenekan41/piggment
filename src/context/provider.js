/* -------------------------------------------------------------------------- */
/*                            External Dependencies                           */
/* -------------------------------------------------------------------------- */
import React from 'react';
import PropTypes from 'prop-types';
import randomWords from 'random-words';

/* --------------------------- Internal Dependencies -------------------------- */
import GradientContext from '.';
import { generateGradient, guidGenerator, generatepalette } from '../utils';

class DataProvider extends React.PureComponent {
	static propTypes = {
		children: PropTypes.oneOfType([PropTypes.node, PropTypes.element]),
	};

	constructor(props) {
		super(props);
		this.state = {
			gradient: [],
			palette: [],
		};
	}

	gradient = async (amount) => {
		const newGradient = [...this.state.gradient];

		for (let i = 0; i < amount; i++) {
			await newGradient.push({
				id: guidGenerator(),
				name: randomWords({ exactly: 2, join: ' ' }),
				color: generateGradient(),
			});
		}

		this.setState({
			gradient: newGradient,
		});
	};

	clearGradient = () => this.setState({ gradient: [], palette: [] });

	loadpalettes = (amount) => {
		const newPalette = [...this.state.palette];
		for (let i = 0; i < amount; i++) {
			newPalette.push(generatepalette());
		}
		this.setState({
			palette: newPalette,
		});
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

export default DataProvider;
