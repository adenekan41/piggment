import React, { useState, useEffect, useContext } from 'react';
import styled from 'styled-components';
import { useParams, Link } from 'react-router-dom';
import SEO from 'components/seo';
import GradientContext from 'context';
import randomWords from 'random-words';

import GradientLayout from 'components/card/card-container';
import { isColor, rgbToHex, guidGenerator, hexToRgb } from 'utils';
import Card from 'components/card';
import isEmpty from 'codewonders-helpers/bundle-cjs/helpers/is-empty';

import { Section as SectionPalette } from './palette';

// SVG Imported as image to avoid re-render
import ArrowRight from '../assets/icons/icon-right.svg';

const SingleGradient = () => {
	const { color, name } = useParams();
	const { state, loadGradients } = useContext(GradientContext);
	const [$color$] = useState(window.atob(color));
	const [result, setResult] = useState({});
	const [newName] = useState(randomWords({ exactly: 2, join: ' ' }));

	// TODO Refactor
	const [formstate, setState] = useState({
		from: rgbToHex($color$, 0) || '#000000',
		to: rgbToHex($color$, 1) || '#ffffff',
		fromPercent:
			$color$
				.substring($color$.indexOf('rgb'), $color$.indexOf('%'))
				.match(/\d+/g)
				.pop() || 20,
		toPercent: $color$.match(/\d+/g).pop() || 100,
		angle: $color$.match(/\d+/g).shift() || 20,
	});

	const handleChange = (e, name_value) => {
		setState({
			...formstate,
			[name_value]: e.target.value,
		});
	};

	useEffect(() => {
		if (state.length < 6) {
			loadGradients(6);
		}
	}, [loadGradients, state]);

	// TODO Refactor ( looks ugly )
	useEffect(() => {
		if (isColor(formstate.from) && isColor(formstate.to)) {
			const newColor = `linear-gradient(${formstate.angle}deg, ${hexToRgb(
				formstate.from,
				true
			)} ${(formstate.fromPercent <= 100 && formstate.fromPercent) ||
				$color$
					.substring($color$.indexOf('rgb'), $color$.indexOf('%'))
					.match(/\d+/g)
					.pop() ||
				100}%, ${hexToRgb(formstate.to, true)} ${(formstate.toPercent <= 100 &&
				formstate.toPercent) ||
				$color$.match(/\d+/g).pop()}%)`;

			// Set Result Object
			setResult({
				id: guidGenerator(),
				color: newColor,
				name: $color$ !== newColor ? newName : name,
			});
		}
	}, [formstate, name, newName, $color$]);

	useEffect(() => {
		window.scrollTo({
			top: 0,
			behavior: 'smooth',
		});
	}, []);

	return (
		<>
			<SEO title={`About pallete ${name}`} />
			{!isEmpty(result) ? (
				<Header>
					<div className="container">
						<div className="row align-items-center ">
							<div className="col-md-8 m-auto text-center">
								<article>
									<h1>{name}.</h1>
									<p>
										Gradient by Piggment. <Link to="/explore">View More</Link>
									</p>
								</article>
							</div>
						</div>
					</div>
				</Header>
			) : (
				<>
					<br />
					<br />
				</>
			)}
			<Section>
				<div className="container">
					<div className="row justify-content-center">
						<div className="col-md-9">
							<article className="mb-5">
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
														maxLength="3"
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
											value={formstate.angle}
											onChange={(e) => handleChange(e, 'angle')}
										/>
									</div>
								</div>
							</article>
						</div>
					</div>

					<div className="card__wrapper">
						{!isEmpty(result) && <Card type="large" data={result} />}
					</div>

					{!isEmpty(result) && (
						<div className="headers">
							<h2>{name}</h2>

							<p className="mt-3">
								<span>{rgbToHex(result.color, 1)}</span> <ArrowRight />{' '}
								<span>{rgbToHex(result.color, 0)}</span>
							</p>
							<p>
								Angle <ArrowRight /> {result.color.match(/\d+/g).shift()}
								deg
							</p>
							<div className="hexes__sections d-flex align-items-center">
								<span
									style={{ background: rgbToHex(result.color, 1) }}
									className="mr-4"
								/>{' '}
								<p className="d-block">{rgbToHex(result.color, 1)}</p>{' '}
								<ArrowRight className="mr-2" />
								{result.color
									.substring(
										result.color.indexOf('rgb'),
										result.color.indexOf('%')
									)
									.match(/\d+/g)
									.pop()}
								%
							</div>
							<br />
							<div className="hexes__sections d-flex align-items-center">
								<span
									style={{ background: rgbToHex(result.color, 0) }}
									className="mr-4"
								/>{' '}
								<p className="d-block">{rgbToHex(result.color, 0)}</p>{' '}
								<ArrowRight className="mr-2" />
								{result.color.match(/\d+/g).pop()}%
							</div>
						</div>
					)}
					<br />
					<GradientLayout
						header="More Like This"
						state={state}
						mode="see-more"
					/>
					<br />
					<br />
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
		text-transform: capitalize;
		margin-bottom: 1.3rem;
		letter-spacing: -1.3px;
	}
	p {
		color: #717171;
		margin: 0px 0;
		font-size: calc(var(--font-sm) + 1.1px);
		font-weight: 400;
	}
	a {
		color: var(--black);
		text-decoration: underline;
	}
`;

const Section = styled(SectionPalette)`
	padding: 1rem 0;
	background: #fff8f0;
	min-height: 100vh;
	.headers {
		margin-bottom: 5rem;
		font-size: var(--font-sm);
		h2 {
			font-size: calc(var(--font-x-md) + 5px);
			text-transform: capitalize;
			font-weight: 500;
			margin-top: 2rem;

			color: var(--black);
			letter-spacing: -1.3px;
			&::first-letter {
				font-size: 75px;
				font-family: var(--font-secondary);
				font-weight: 900;
			}
		}
		.hexes__sections {
			span {
				width: 80px;
				height: 80px;
				display: block;
				border-radius: 50%;
			}
			p {
				margin: 0 9px 0 0;
			}
		}
	}
`;
export default SingleGradient;
