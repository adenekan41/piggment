import React, { useCallback, useState, useEffect } from 'react';
import styled from 'styled-components';
import randomWords from 'random-words';

import { generateGradient, debounce } from 'utils';
import Card from 'components/card';
import { setState as saveState } from 'codewonders-helpers';
import { ReactComponent as ArrowRight } from '../../assets/icons/icon-right.svg';
import { ReactComponent as Loader } from '../../assets/icons/loader.svg';
import { ReactComponent as Reload } from '../../assets/icons/icon-refresh.svg';
import { ReactComponent as Search } from '../../assets/icons/icon-search.svg';
import { ReactComponent as Circle } from '../../assets/icons/icon-circle.svg';
import { ReactComponent as Layout } from '../../assets/icons/icon-layout.svg';
import {
	getState,
	clearState,
} from 'codewonders-helpers/bundle-cjs/helpers/localstorage';

const Explore = () => {
	const [state, setState] = useState([]);
	const [layout, setLayout] = useState(false);

	const gradient = useCallback(() => {
		for (let i = 0; i < 30; i++) {
			setState((s) => [
				...s,
				{
					name: randomWords({ exactly: 2, join: ' ' }),
					color: generateGradient(),
				},
			]);
		}
	}, []);

	const scrollWindow = useCallback(() => {
		const d = document.documentElement;
		const offset = d.scrollTop + window.innerHeight;
		const height = d.offsetHeight;
		if (offset >= height) {
			return gradient();
		}
	}, [gradient]);

	const handleScroll = debounce(() => {
		scrollWindow();
	}, 100);

	useEffect(() => {
		if (state.length < 6) {
			gradient();
		}
	}, [gradient, state]);

	useEffect(() => {
		if (getState('LAYOUT')) {
			setLayout(true);
		}
	}, []);
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
					<div className="d-flex justify-content-between explore_more">
						<h2>Discover</h2>
						<div className="d-flex">
							<div
								onClick={() => {
									saveState('LAYOUT', 1);
									setLayout(true);
								}}
								className="mr-4"
							>
								<Circle
									className={getState('LAYOUT') || layout ? 'active' : null}
								/>
							</div>
							<div
								className="mr-4"
								onClick={() => {
									clearState('LAYOUT');
									setLayout(false);
								}}
							>
								<Layout
									className={!getState('LAYOUT') || !layout ? 'active' : null}
								/>
							</div>
							<span
								onClick={async () => {
									await setState([]);
									gradient();
								}}
							>
								<Reload className="mr-1" />
								Refresh
							</span>
						</div>
					</div>
					<br />
					<div className="grid">
						{state &&
							state.map((bg_gradient, index) => (
								<Card
									data={bg_gradient}
									key={index + bg_gradient.name}
									layout={getState('LAYOUT') && 'circle'}
								/>
							))}
					</div>

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
	}

	.explore_more {
		align-items: center;
		span {
			cursor: pointer;
			color: var(--accent);
			border-bottom: 2px solid var(--theme-primary);
			font-size: 15px;
			svg {
				fill: var(--accent) !important;
				width: 15px;
			}
		}
		div {
			svg {
				fill: #adadad;
				width: 18px;
				cursor: pointer;
				&.active {
					fill: var(--accent) !important;
				}
			}
		}
	}
	h2 {
		font-weight: 600;
		font-size: 1.62em;
		color: var(--black);
		margin-bottom: 1.4rem;
		letter-spacing: -1.3px;
	}
	.grid {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
		grid-template-rows: 1fr;
		grid-column-gap: 40px;
		grid-row-gap: 40px;
	}
`;

export default Explore;
