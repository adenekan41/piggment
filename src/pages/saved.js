import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

import { getState } from 'codewonders-helpers/bundle-cjs/helpers/localstorage';

import GradientLayout from 'components/card/card-container';
import { Link } from 'react-router-dom';

import { ReactComponent as Banner } from '../assets/icons/saved-banner.svg';
import { ReactComponent as Love } from '../assets/icons/icon-love.svg';
import { ReactComponent as Empty } from '../assets/icons/icon-empty.svg';

const SavedColors = () => {
	const [state, setState] = useState([]);

	useEffect(() => {
		setState(getState('SAVED'));
	}, []);

	return (
		<>
			<Header>
				<div className="container">
					<div className="row align-items-center">
						<div className="col-md-7">
							<article>
								<h1>Your gradient pocket.</h1>
								<p>
									You currently have <b>({state.length || 0})</b> gradients in
									your pocket.
								</p>
							</article>
						</div>
						<div className="col-md-5">
							<Banner className="w-100 h-100" />
						</div>
					</div>
				</div>
			</Header>
			<Section>
				<div className="container">
					<GradientLayout
						header={`Saved (${state.length || 0})`}
						mode="delete"
						state={state}
					/>
					{!state && state.length === 0 && (
						<div className="text-center empty">
							<Empty className="large__svg" />
							<h3>You dont have any saved gradient yet</h3>
							<p>
								Click <Love className="small__svg" /> to save a gradient
							</p>
							<Link
								className="btn btn-pigment mt-4"
								type="button"
								to="/explore"
							>
								Explore Gradients
							</Link>
						</div>
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
	min-height: 30em;
	align-items: center;
	justify-content: center;
	background-size: calc(20 * 0.5px) calc(20 * 0.5px);
	background-image: radial-gradient(#0a113e47 0.5px, transparent 0.5px);
	display: flex;
	h1 {
		font-weight: 900;
		font-size: 3.02em;
		color: var(--black);
		margin-bottom: 1.3rem;
		letter-spacing: -1.3px;
	}
	p {
		color: #717171;
		margin: 0px 0;
		font-size: 17px;
		font-weight: 400;
	}
`;

const Section = styled.section`
	padding-top: 5rem;
	background: #fff8f0;
	min-height: 100vh;
	.empty {
		margin-top: 2rem;
		h3 {
			font-weight: 600;
			font-size: 1.72em;
			color: var(--black);
			margin-bottom: 1rem;
			letter-spacing: -1.3px;
		}
		p {
			color: #717171;
			margin: 0px 0;
			font-size: 18px;
			font-weight: 400;
		}
		svg {
			&.small__svg {
				width: 18px;
				fill: red;
			}
			&.large__svg {
				height: 250px;
				margin-top: 2rem;
			}
		}
		a {
			padding: 11px 35px;
			font-size: 14px;
		}
	}
`;

export default SavedColors;
