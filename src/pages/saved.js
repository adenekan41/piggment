import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

import { getState } from 'codewonders-helpers/bundle-cjs/helpers/localstorage';

import { Link } from 'react-router-dom';
import { clearState } from 'codewonders-helpers';
import SEO from 'components/seo';
import GradientLayout from '../components/card/card-container';

import { ReactComponent as Banner } from '../assets/icons/saved-banner.svg';
import { ReactComponent as Love } from '../assets/icons/icon-love.svg';
import { ReactComponent as Empty } from '../assets/icons/icon-empty.svg';

const SavedColors = () => {
	const [state, setState] = useState([]);
	const [palette, setPalette] = useState([]);
	const [nav, setNav] = useState('gradients');

	useEffect(() => {
		setState(getState('SAVED_GRADIENTS'));
		setPalette(getState('SAVED_PALETTE'));

		if (getState('SAVED_GRADIENTS').length === 0) {
			clearState('SAVED_GRADIENTS');
		}
		if (getState('SAVED_PALETTE').length === 0) {
			clearState('SAVED_PALETTE');
		}
	}, []);

	return (
		<>
			<SEO title="Saved Gradients" />
			<Header>
				<div className="container">
					<div className="row align-items-center">
						<div className="col-md-7">
							<article>
								<h1>Your gradient pocket.</h1>
								<p>
									You currently have <b>({state.length + palette.length})</b>{' '}
									gradients in your pocket.
								</p>
							</article>
						</div>
						<div className="col-md-5 d-none d-md-block">
							<Banner className="w-100 h-100" />
						</div>
					</div>
				</div>
			</Header>
			<Section>
				<div className="container">
					<div className="d-flex  justify-content-center tab__nav">
						<button
							onClick={() => setNav('gradients')}
							className={`btn ${nav === 'gradients' && 'active'}`}
							type="button"
						>
							Gradients <span>{state.length || 0}</span>
						</button>
						<button
							onClick={() => setNav('palette')}
							className={`btn ${nav === 'palette' && 'active'}`}
							type="button"
						>
							Palettes <span>{palette.length || 0}</span>
						</button>
					</div>
					{nav === 'gradients' ? (
						<>
							<div className="fadeIn">
								<GradientLayout
									header={`Saved Gradients (${state.length || 0})`}
									mode="delete"
									state={state}
								/>
								{!getState('SAVED_GRADIENTS') && (
									<div className="text-center empty">
										<Empty className="large__svg" />
										<h3>You dont have any saved gradient yet</h3>
										<p>
											Click <Love className="small__svg" /> to save a gradient
										</p>
										<Link className="btn btn-piggment mt-4" to="/explore">
											Explore Gradients
										</Link>
									</div>
								)}
							</div>
						</>
					) : (
						<>
							<GradientLayout
								header={`Saved Palettes (${palette.length || 0})`}
								mode="delete"
								state={palette}
							/>
							{!getState('SAVED_PALETTE') && (
								<div className="text-center empty">
									<Empty className="large__svg" />
									<h3>You dont have any saved gradient palettes yet</h3>
									<p>
										Click <Love className="small__svg" /> to save a gradient
										palette
									</p>
									<Link className="btn btn-piggment mt-4" to="/palette">
										Explore Palettes
									</Link>
								</div>
							)}
						</>
					)}
				</div>
				<br />
				<br />
			</Section>
		</>
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
	padding-top: 2rem;
	background: #fff8f0;
	min-height: 100vh;
	.tab__nav {
		margin: 1.5rem 0;
		button {
			border: none;
			border-radius: 0px;
			margin: 0 5px;
			font-size: 15px;
			color: var(--black);
			background: transparent;
			padding: 11px 30px;
			span {
				background: #d0d0d0;
				padding: 2px 10px;
				border-radius: 50px;
				margin-left: 8px;
				font-size: 12px;
				color: var(--black);
			}
			&.active {
				border-bottom: 3px solid var(--accent);
				color: var(--accent);
				span {
					background: var(--accent);
					color: #fff;
				}
			}
		}
	}
	.empty {
		margin-top: 2rem;
		h3 {
			font-weight: 600;
			font-size: var(--font-x-md);
			color: var(--black);
			margin-bottom: 1rem;
			letter-spacing: -1.3px;
		}
		p {
			color: #717171;
			margin: 0px 0;
			font-size: calc(var(--font-sm) + 1.1px);
			font-weight: 400;
		}
		svg {
			&.small__svg {
				width: calc(var(--font-sm) + 1.1px);
				fill: red;
			}
			&.large__svg {
				height: 250px;

				width: auto;

				margin-top: 2rem;
			}
		}
		a {
			padding: 11px 35px;
			font-size: calc(var(--font-sm) - 1px);
		}
	}
`;

export default SavedColors;
