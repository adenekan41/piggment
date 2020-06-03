import React, { useState, useEffect, useContext } from 'react';
import styled from 'styled-components';
import { useParams, Link } from 'react-router-dom';
import SEO from 'components/seo';
import GradientContext from 'context';

import AddToHomeScreen from 'components/add-to-homescreen';
import GradientLayout from 'components/card/card-container';
import { generatepalette, isColor } from 'utils';
import Card from 'components/card';
import isEmpty from 'codewonders-helpers/bundle-cjs/helpers/is-empty';

import { ReactComponent as ArrowRight } from '../assets/icons/icon-right.svg';

const SinglePallete = () => {
	const { color1, color2, name } = useParams();

	const { palette, loadpalettes } = useContext(GradientContext);
	const [result, setResult] = useState({});

	useEffect(() => {
		if (isColor(`#${color1}`) && isColor(`#${color2}`)) {
			setResult(generatepalette(`#${color1}`, `#${color2}`));
		}
	}, [color2, color1]);
	useEffect(() => {
		if (palette.length < 6) {
			loadpalettes(6);
		}
	}, [loadpalettes, palette]);
	return (
		<>
			<SEO title={`About pallete ${name}`} />
			<AddToHomeScreen />
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
					<div className="card__wrapper">
						{!isEmpty(result) && (
							<Card
								palette
								cardMode="large"
								data={{
									name: `#${name}`,
									...result,
								}}
							/>
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

const Section = styled.section`
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
