import React, { useCallback, useEffect, useContext, useState } from 'react';
import styled from 'styled-components';

import { debounce } from 'utils';
import GradientLayout from '../components/card/card-container';
import { GradientContext } from '../context';

import { ReactComponent as ArrowRight } from '../assets/icons/icon-right.svg';
import { ReactComponent as Loader } from '../assets/icons/loader.svg';
import { ReactComponent as Search } from '../assets/icons/icon-search.svg';

const Explore = () => {
	const { state, loadGradients } = useContext(GradientContext);
	const [formstate, setState] = useState({
		from: '',
		to: '',
	});
	const scrollWindow = useCallback(() => {
		const d = document.documentElement;
		const offset = d.scrollTop + window.innerHeight;
		const height = d.offsetHeight - 250;
		if (offset >= height) {
			return loadGradients(5);
		}
	}, [loadGradients]);

	const handleScroll = debounce(() => {
		scrollWindow();
	}, 100);

	useEffect(() => {
		if (state.length === 0) {
			loadGradients(10);
		}
	}, [loadGradients, state]);

	useEffect(
		function setupListener() {
			window.addEventListener('scroll', handleScroll);

			return function cleanupListener() {
				window.removeEventListener('scroll', handleScroll);
			};
		},
		[handleScroll]
	);
	const handleSearchChange = (e) => {
		// const val = e.target.value.toLowerCase();
		// setFilteredGradients(
		// 	filteredGradients.filter((gradient) => {
		// 		return (
		// 			gradient.name.toLowerCase().includes(val) ||
		// 			gradient.color.toLowerCase().includes(val)
		// 		);
		// 	})
		// );
	};
	return (
		<main>
			<Header>
				<div className="container">
					<div className="row align-items-center justify-content-center  pos-rel">
						<div className="col-md-9">
							<article>
								<h1>Explore fresh gradients.</h1>
								<div className="row align-items-center">
									<div className="col-md-5">
										<label htmlFor="input">Search by name / color</label>
										<div className="input-group">
											<div className="input-group-prepend">
												<span className="input-group-text">
													<Search />
												</span>
											</div>
											<input
												className="form-control"
												onKeyUp={(e) => handleSearchChange(e)}
												placeholder="Search by gradient name or color"
											/>
										</div>
									</div>
									<div className="col-md-3">
										<label htmlFor="from">From color</label>
										<div className="input-group">
											<div className="input-group-prepend">
												<span className="input-group-text">
													<div
														style={{ background: formstate.from }}
														className="color-picker-wrapper"
													>
														<input
															type="color"
															value={formstate.from}
															onChange={(e) =>
																setState({ from: e.target.value })
															}
														/>
													</div>
												</span>
											</div>
											<input
												className="form-control"
												placeholder="#000"
												name="from"
												value={formstate.from}
												onChange={(e) => setState({ from: e.target.value })}
											/>
										</div>
									</div>
									<div className="col">
										<ArrowRight className="mt-4" />
									</div>
									<div className="col-md-3">
										<label htmlFor="input">To color</label>
										<div className="input-group">
											<div className="input-group-prepend">
												<span className="input-group-text">
													<div
														style={{ background: formstate.to }}
														className="color-picker-wrapper"
													>
														<input
															type="color"
															value={formstate.to}
															onChange={(e) => setState({ to: e.target.value })}
														/>
													</div>
												</span>
											</div>
											<input
												className="form-control"
												placeholder="#000"
												name="to"
												value={formstate.to}
												onChange={(e) => setState({ to: e.target.value })}
											/>
										</div>
									</div>
								</div>
							</article>
						</div>
					</div>
				</div>
			</Header>
			<Section>
				<div className="container">
					<br />
					<GradientLayout noRefresh header="Discover." state={state} />

					<Loader className="w-70" />
				</div>
			</Section>
		</main>
	);
};

const Header = styled.header`
	background: #fff8f0;
	height: 32em;
	align-items: center;
	justify-content: center;
	background-size: calc(20 * 0.5px) calc(20 * 0.5px);
	background-image: radial-gradient(#0a113e47 0.5px, transparent 0.5px);
	display: flex;
	h1 {
		font-weight: 900;
		font-size: var(--font-lg);
		text-align: center;
		color: var(--black);
		letter-spacing: -1.3px;
	}
	label {
		font-size: calc(var(--font-sm) - 1px);
		color: #929292;
		font-weight: 400;
	}

	input.form-control {
		padding: 27px 21px;
		border: none;
		font-size: var(--font-sm);
		box-shadow: none !important;
		&::-webkit-input-placeholder {
			color: #b1b1b1;
		}
	}
	input[type='color'] {
		opacity: 0;
		display: block;
		width: 28px;
		height: 28px;
		border: none;
	}
	.color-picker-wrapper {
		background: rgb(0, 0, 0);
		height: 28px;
		border-radius: 6px;
		border: 1px solid #fff8f0;
		width: 28px;
	}
	span.input-group-text {
		background: #fff;
		border: none;
		padding-right: 0;
		svg {
			width: 20px;
		}
	}
`;

const Section = styled.section`
	padding-top: 5rem;
	background: #fff8f0;
	.w-70 {
		width: 70px;
		height: 120px;
	}
`;

export default Explore;
