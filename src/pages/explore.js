/* -------------------------------------------------------------------------- */
/*                            External Dependencies                           */
/* -------------------------------------------------------------------------- */

import React, { useCallback, useEffect, useContext, useState } from 'react';
import styled from 'styled-components';
import randomWords from 'random-words';
import isEmpty from 'codewonders-helpers/bundle-cjs/helpers/is-empty';
import getRandomColors from 'codewonders-helpers/bundle-cjs/helpers/get-random-colors';

/* -------------------------- Internal Dependencies ------------------------- */

import {
	debounce,
	isColor,
	hexToRgb,
	guidGenerator,
	validateHexCode,
	shouldBeLessThan,
} from 'utils';
import SEO from 'components/seo';
import Card from 'components/card';
import AddToHomeScreen from 'components/a11y';
import GradientLayout from '../components/card/card-container';
import GradientContext from '../context';

/* --------------------------- Image Dependencies --------------------------- */

import ArrowRight from '../assets/icons/icon-right.svg';
import Loader from '../assets/icons/loader.svg';

const Explore = () => {
	const { state, loadGradients } = useContext(GradientContext);
	const [result, setResult] = useState({});
	const [name] = useState(randomWords({ exactly: 2, join: ' ' }));
	const [ID] = useState(guidGenerator());

	const [$color$] = useState(
		'linear-gradient(58deg, rgb(182, 108, 208) 21%, rgb(12, 30, 39) 100%)'
	);

	const [formstate, setState] = useState({
		from: validateHexCode(getRandomColors()) || '#a9c3d0',
		to: validateHexCode(getRandomColors()) || '#f0c7ff',
		fromPercent:
			$color$
				.substring($color$.indexOf('rgb'), $color$.indexOf('%'))
				.match(/\d+/g)
				.pop() || 20,
		toPercent: $color$.match(/\d+/g).pop() || 100,
		angle: Math.floor(Math.random() * (100 - 58 + 1)) + 58,
	});

	const handleChange = (e, name_value) => {
		setState({
			...formstate,
			[name_value]: e.target.value,
		});
	};

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

	useEffect(() => {
		if (isColor(formstate.from) && isColor(formstate.to)) {
			const newColor = `linear-gradient(${shouldBeLessThan(
				formstate.angle,
				360
			)}deg, ${hexToRgb(formstate.from, true)} ${shouldBeLessThan(
				formstate.fromPercent
			) || 20}%, ${hexToRgb(formstate.to, true)} ${shouldBeLessThan(
				formstate.toPercent
			) || 100}%)`;

			// Final Result
			setResult({
				id: ID,
				color: newColor,
				name,
			});
		}
	}, [ID, formstate, name, $color$]);

	return (
		<main>
			<SEO
				title="Explore"
				description="Explore fresh gradients. Find new gradients Inspiring Gradients"
			/>
			<AddToHomeScreen />
			<Header>
				<div className="container">
					<div className="row align-items-center justify-content-center  pos-rel">
						<div className="col-md-9">
							<article>
								<h1>Explore fresh gradients.</h1>
								<div className="row align-items-center">
									<div className="col-md-4 col-6">
										<label htmlFor="background">From</label>
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
															onChange={(e) => handleChange(e, 'from')}
														/>
													</div>
												</span>
											</div>
											<input
												className="form-control"
												placeholder="#fff5e0"
												type="text"
												maxLength="7"
												value={formstate.from}
												onChange={(e) => handleChange(e, 'from')}
											/>
											<div className="input-group-append">
												<span className="input-group-text percentage__input">
													<input
														type="number"
														placeholder="30"
														value={formstate.fromPercent}
														maxLength="3"
														max="100"
														onChange={(e) => handleChange(e, 'fromPercent')}
													/>
													%
												</span>
											</div>
										</div>
									</div>
									<div className="col-md-1 d-none justify-content-center d-md-flex">
										<img src={ArrowRight} className="mt-4" alt="Arrow Right" />
									</div>
									<div className="col-md-4 col-6">
										<label htmlFor="input">To</label>
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
															onChange={(e) => handleChange(e, 'to')}
														/>
													</div>
												</span>
											</div>
											<input
												className="form-control"
												placeholder="#0e0a38"
												type="text"
												maxLength="7"
												value={formstate.to}
												onChange={(e) => handleChange(e, 'to')}
											/>
											<div className="input-group-append">
												<span className="input-group-text percentage__input">
													<input
														type="number"
														placeholder="100"
														value={formstate.toPercent}
														max="100"
														onChange={(e) => handleChange(e, 'toPercent')}
													/>
													%
												</span>
											</div>
										</div>
									</div>
									<div className="col-md">
										<label htmlFor="background">Angle (deg)</label>
										<input
											type="number"
											className="form-control"
											placeholder="Angle"
											max="360"
											value={formstate.angle}
											onChange={(e) => handleChange(e, 'angle')}
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
					<div className="card__wrapper">
						{!isEmpty(result) && <Card type="large" data={result} />}
					</div>
					<br />
					<GradientLayout noRefresh header="Discover." state={state} />

					<img src={Loader} className="w-70" alt="Loader" />
				</div>
			</Section>
		</main>
	);
};

const Header = styled.header`
	background: #fff8f0;
	min-height: 28em;
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
	.percentage__input {
		padding: 0 10px 0 0 !important;
		color: #ddd;
		input {
			width: 40px;
			padding: 3px 0 3px 0;
			border: none;
			text-align: right;
			color: #575e64;
			outline: none !important;
			@media (max-width: 787px) {
				width: 21px;
			}
		}
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
		margin: auto;
		display: block;
	}
	.card__wrapper {
		margin: -10rem 0px 2rem;
	}
`;

export default Explore;
