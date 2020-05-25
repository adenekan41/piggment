import React, { useCallback, useEffect, useContext } from 'react';
import styled from 'styled-components';

import { debounce } from 'utils';
import GradientLayout from 'components/card/card-container';
import { GradientContext } from 'context';

import { ReactComponent as ArrowRight } from '../../assets/icons/icon-right.svg';
import { ReactComponent as Loader } from '../../assets/icons/loader.svg';
import { ReactComponent as Search } from '../../assets/icons/icon-search.svg';

const Explore = () => {
	const { state, loadGradients } = useContext(GradientContext);

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
		if (state.length < 10) {
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
												placeholder="Search by gradient name or color"
											/>
										</div>
									</div>
									<div className="col-md-3">
										<label htmlFor="input">From color</label>
										<input
											type="text"
											id="input"
											className="form-control"
											placeholder="Enter color code"
										/>
									</div>
									<div className="col">
										<ArrowRight className="mt-4" />
									</div>
									<div className="col-md-3">
										<label htmlFor="input">To color</label>
										<input
											type="text"
											className="form-control"
											placeholder="Enter color code"
										/>
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
		font-size: 3.02em;
		text-align: center;
		color: var(--black);
		letter-spacing: -1.3px;
	}
	label {
		font-size: 14px;
		color: #929292;
		font-weight: 400;
	}

	input {
		padding: 27px 21px;
		border: none;
		font-size: 15px;
		box-shadow: none !important;
		&::-webkit-input-placeholder {
			color: #b1b1b1;
		}
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
