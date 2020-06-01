import React, { useState, useEffect, useContext, useCallback } from 'react';
import styled from 'styled-components';

import { debounce, isColor, generatepalette } from 'utils';
import SEO from 'components/seo';
import GradientContext from 'context';
import GradientLayout from 'components/card/card-container';
import Card from 'components/card';
import { isEmpty } from 'codewonders-helpers';

import { ReactComponent as ArrowRight } from '../assets/icons/icon-right.svg';
import { ReactComponent as Loader } from '../assets/icons/loader.svg';

const Gradientpalette = () => {
	const [formstate, setState] = useState({
		start: '#fff5e0',
		end: '#0e0a38',
		count: 6,
	});
	const [result, setResult] = useState({});

	const handleChange = (e, name) => {
		setState({
			...formstate,
			[name]: e.target.value,
		});
	};
	const { palette, loadpalettes } = useContext(GradientContext);

	const scrollWindow = useCallback(() => {
		const d = document.documentElement;
		const offset = d.scrollTop + window.innerHeight;
		const height = d.offsetHeight - 250;
		if (offset >= height) {
			return loadpalettes(5);
		}
	}, [loadpalettes]);

	const handleScroll = debounce(() => {
		scrollWindow();
	}, 100);

	useEffect(() => {
		if (palette.length === 0) {
			loadpalettes(6);
		}
	}, [loadpalettes, palette]);

	useEffect(
		function setupListener() {
			window.addEventListener('scroll', handleScroll);

			return function cleanupListener() {
				window.removeEventListener('scroll', handleScroll);
			};
		},
		[handleScroll]
	);

	useEffect(() => {
		if (isColor(formstate.end) && isColor(formstate.start)) {
			setResult(
				generatepalette(
					formstate.start || '#fff5e0',
					formstate.end || '#0e0a38',
					formstate.count || 6
				)
			);
		}
	}, [formstate.start, formstate.end, formstate.count]);

	return (
		<>
			<SEO
				title="Gradient palette"
				description="Get refreshing gradient palettes for your application"
			/>
			<Header>
				<div className="container">
					<div className="row align-items-center ">
						<div className="col-md-8 m-auto text-center">
							<article>
								<h1>Gradient palette.</h1>
								<p>Get amazing palette creator between colors.</p>
							</article>
						</div>
					</div>
				</div>
			</Header>
			<Section>
				<div className="container">
					<div className="row align-items-center justify-content-center">
						<div className="col-md-9">
							<article>
								<div className="row align-items-center">
									<div className="col-md-4">
										<label htmlFor="background">Start Color</label>
										<div className="input-group">
											<div className="input-group-prepend">
												<span className="input-group-text">
													<div
														style={{ background: formstate.start }}
														className="color-picker-wrapper"
													>
														<input
															type="color"
															value={formstate.start}
															onChange={(e) => handleChange(e, 'start')}
														/>
													</div>
												</span>
											</div>
											<input
												className="form-control"
												placeholder="#fff5e0"
												type="text"
												value={formstate.start}
												onChange={(e) => handleChange(e, 'start')}
											/>
										</div>
									</div>
									<div className="col-md-1 d-flex justify-content-center">
										<ArrowRight className="mt-4" />
									</div>
									<div className="col-md-4">
										<label htmlFor="input">End Color</label>
										<div className="input-group">
											<div className="input-group-prepend">
												<span className="input-group-text">
													<div
														style={{ background: formstate.end }}
														className="color-picker-wrapper"
													>
														<input
															type="color"
															value={formstate.end}
															onChange={(e) => handleChange(e, 'end')}
														/>
													</div>
												</span>
											</div>
											<input
												className="form-control"
												placeholder="#0e0a38"
												type="text"
												value={formstate.end}
												onChange={(e) => handleChange(e, 'end')}
											/>
										</div>
									</div>
									<div className="col-md">
										<label htmlFor="background">Amount</label>
										<input
											type="number"
											className="form-control"
											placeholder="Count"
											value={formstate.count}
											onChange={(e) => handleChange(e, 'count')}
										/>
									</div>
								</div>
							</article>
							<br />
							<br />
						</div>
						<div className="col-md-12 mb-4">
							{!isEmpty(result) && (
								<Card palette cardMode="large" data={result} />
							)}
						</div>
					</div>
				</div>
				<div className="container">
					<br />
					<GradientLayout
						noRefresh
						header="Discover."
						state={palette}
						palette
					/>

					<Loader className="w-70" />
				</div>
			</Section>
		</>
	);
};

const Header = styled.header`
	background: #fff8f0;
	min-height: 19em;
	align-items: center;
	justify-content: center;
	background-size: calc(20 * 0.5px) calc(20 * 0.5px);
	background-image: radial-gradient(#0a113e47 0.5px, transparent 0.5px);
	display: flex;
	h1 {
		font-weight: 900;
		font-size: var(--font-lg);
		color: var(--black);
		margin-bottom: 1.3rem;
		letter-spacing: -1.3px;
	}
	p {
		color: #717171;
		margin: 0px 0;
		font-size: calc(var(--font-sm) + 1.1px);
		font-weight: 400;
	}
`;

const Section = styled.section`
	padding: 1rem 0;
	background: #fff8f0;
	min-height: 100vh;

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
	.pos-sticky {
		position: sticky;
		top: 56px;
		z-index: 99999999;
		padding: 8px 0;
		background: #fff8f0;
	}
	.w-70 {
		width: 70px;
		height: 120px;
	}
`;

export default Gradientpalette;
