import React, { useState, useEffect, useContext } from 'react';
import styled from 'styled-components';
import { useParams, Link } from 'react-router-dom';
import SEO from 'components/seo';
import GradientContext from 'context';

import GradientLayout from 'components/card/card-container';
import { generatepalette, isColor } from 'utils';
import Card from 'components/card';
import isEmpty from 'codewonders-helpers/bundle-cjs/helpers/is-empty';

import PureComponent from 'components/pure-component-wrapper';
import { Section as SectionPalette } from './palette';

// SVG Imported as image to avoid re-render
import { ReactComponent as ArrowRight } from '../assets/icons/icon-right.svg';

const SinglePallete = () => {
	/* -------------------------------- PURE SVG -------------------------------- */
	const PureArrowRight = PureComponent(ArrowRight);
	/* ----------------------------------- End ---------------------------------- */

	const { color1, color2, name, count } = useParams();

	const [formstate, setState] = useState({
		start: `#${color1}`,
		end: `#${color2}`,
		count: count && parseInt(count, 10),
	});

	const { palette, loadpalettes } = useContext(GradientContext);
	const [result, setResult] = useState({});

	const handleChange = (e, name_value) => {
		setState({
			...formstate,
			[name_value]: e.target.value,
		});
	};

	useEffect(() => {
		if (isColor(formstate.start) && isColor(formstate.end)) {
			setResult(
				generatepalette(formstate.start, formstate.end, formstate.count || 6)
			);
		}
	}, [formstate]);

	useEffect(() => {
		if (palette.length < 6) {
			loadpalettes(6);
		}
	}, [loadpalettes, palette]);

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
									<h1>{`#${name}`}.</h1>
									<p>
										Palette by Piggment. <Link to="/palette">View More</Link>
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
									<div className="col-md-1 d-none justify-content-center d-md-flex">
										<PureArrowRight className="mt-4" />
									</div>
									<div className="col-md-4 col-6">
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
						</div>
					</div>
					<div className="card__wrapper">
						{!isEmpty(result) && (
							<Card palette cardMode="large" data={result} />
						)}
					</div>
					{!isEmpty(result) && (
						<div className="headers">
							<h2>{`#${name}`}</h2>

							<div className="hexes__sections d-flex align-items-center">
								<div className="d-flex align-items-center">
									{' '}
									<p className="d-block">{result.start}</p>{' '}
									<span style={{ background: result.start }} className="mr-4" />{' '}
								</div>
								<ArrowRight className="mr-4" />
								<div className="d-flex align-items-center">
									<span style={{ background: result.end }} className="mr-2" />{' '}
									<p className="d-block">{result.end}</p>{' '}
								</div>
							</div>
							<br />
						</div>
					)}
					<br />
					<GradientLayout header="More Like This" state={palette} palette />
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
			font-size: 36px;
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
export default SinglePallete;
