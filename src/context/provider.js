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
			snarkbars: [],
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

	setSnarkbar = (alertMsg, type = 'success', duration = 5000) => {
		const id = guidGenerator();
		this.setState({
			snarkbars: [
				...this.state.snarkbars,
				{
					id,
					msg: alertMsg,
					type,
				},
			],
		});

		setTimeout(() => {
			this.removeSnarkbar(id);
		}, duration);
	};

	removeSnarkbar = (id) => {
		const filteredSnarkbars = this.state.snarkbars.filter(
			(alert) => alert.id !== id
		);
		this.setState({
			snarkbars: filteredSnarkbars,
		});
	};

	render() {
		const { children } = this.props;
		return (
			<GradientContext.Provider
				value={{
					state: this.state.gradient,
					palette: this.state.palette,
					snarkbars: this.state.snarkbars,
					setSnarkbar: this.setSnarkbar,
					removeSnarkbar: this.removeSnarkbar,
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
