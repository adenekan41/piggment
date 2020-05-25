import React, { useEffect, useContext } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import Card from '../components/card';
import { GradientContext } from '../context';

import GradientLayout from '../components/card/card-container';
import { ReactComponent as Banner } from '../assets/icons/banner.svg';

const Home = () => {
	const { state, loadGradients } = useContext(GradientContext);

	useEffect(() => {
		if (state.length < 7) {
			loadGradients(7);
		}
	}, [loadGradients, state]);

	return (
		<main>
			<Header>
				<div className="container">
					<div className="row align-items-center justify-content-center  pos-rel">
						<div className="col-md-7">
							<article>
								<h1>The gradient you have always wanted.</h1>
								<p>
									Generate, explore, easy CSS copy crossbrowser code all in one
									place
								</p>

								<Link className="btn btn-pigment" to="/generate" type="button">
									Generate Gradients
								</Link>
							</article>
						</div>
						{state[6] && (
							<Card
								data={
									state[6] || {
										name: '1234',
										color:
											'linear-gradient(2deg, rgb(255,255,255,0.4) 3%, rgb(255,255,255,0.8) 30%)',
									}
								}
								type="large"
							/>
						)}
					</div>
				</div>
			</Header>
			<Section>
				<div className="container">
					<GradientLayout
						header="Explore gradients."
						state={state.slice(0, -1)}
						noRefresh
						mode="see-more"
					/>

					<div className="m-auto text-center more__cards">
						<p>Need more gradients?</p>
						<Link className="btn btn-pigment" to="/explore">
							See All Gradient
						</Link>
					</div>
				</div>
			</Section>
			<SectionMore>
				<div className="container">
					<div className="row align-items-center">
						<div className="col-md-5">
							<h3>Create the perfect Gradient.</h3>
							<p>
								Create the perfect gradient palette and get inspired to make
								something beautiful.
							</p>
							<Link
								className="btn btn-pigment mr-md-3"
								to="/generate"
								type="button"
							>
								Start Generating
							</Link>
							<Link
								className="btn btn-outline-pigment"
								type="button"
								to="/explore"
							>
								Explore Gradients
							</Link>
						</div>
						<div className="col-md-7">
							<Banner />
						</div>
					</div>
				</div>
			</SectionMore>
			<SectionTrusted>
				<div>
					<p>We are super fast and inspiring and open sourced.</p>
					<h2>Trusted by thousands of expert creators.</h2>
				</div>
			</SectionTrusted>
		</main>
	);
};

const Header = styled.header`
	background: #fff8f0;
	height: 42em;
	align-items: center;
	background-size: calc(20 * 0.5px) calc(20 * 0.5px);
	background-image: radial-gradient(#0a113e47 0.5px, transparent 0.5px);
	justify-content: center;
	text-align: center;
	display: flex;
	@media (max-width: 990px) {
		display: block;
		padding-top: 8rem;
		height: 34em;
	}
	h1 {
		font-weight: 900;
		font-size: 3.82em;
		color: var(--black);
		letter-spacing: -1.3px;
		@media (max-width: 990px) {
			font-size: 2.3em;
		}
	}
	.pos-rel {
		position: relative;
	}
	p {
		color: #717171;
		margin: 6px 0;
		font-size: 17px;
		font-weight: 400;
		@media (max-width: 990px) {
			font-size: 14px;
		}
	}
	a.btn {
		padding: 12px 40px;
		border: none;
		font-size: 15px;
		font-weight: 500;
		margin-top: 2rem;
		@media (max-width: 990px) {
			font-size: 14px;
		}
	}
	.large__sum-card {
		position: absolute;
		top: 27rem;
		@media (max-width: 990px) {
			display: none;
		}
	}
`;

const Section = styled.section`
	margin-top: 26rem;
	@media (max-width: 990px) {
		margin-top: 6rem;
	}
	.w-70 {
		width: 70px;
	}

	.more__cards {
		margin-top: 4rem !important;
		p {
			color: #717171;
			font-size: 16px;
			font-weight: 400;
		}
		a {
			padding: 12px 40px;
			border: none;
			font-size: 15px;

			font-weight: 500;
		}
	}
`;

const SectionMore = styled.section`
	background: #fff8f0;
	min-height: 20em;
	display: flex;
	margin-top: 6rem;
	padding: 4em 0;
	align-items: center;

	h3 {
		font-weight: 900;
		font-size: 2.82em;
		color: var(--black);
		letter-spacing: -1.3px;
		margin-bottom: 1.4rem;
	}
	p {
		color: #717171;
		font-size: 15px;
		font-weight: 400;
	}
	a {
		padding: 10px 30px;
		border: none;
		font-size: 15px;
		color: var(--accent);
		font-weight: 500;
		margin-top: 1rem;
	}
`;

const SectionTrusted = styled.section`
	padding: 4rem;
	display: flex;
	justify-content: center;
	min-height: 10em;
	padding: 6em 0;
	text-align: center;
	align-items: center;
	h2 {
		font-weight: 900;
		font-size: 2.52em;
		text-align: center;
		color: var(--black);
		letter-spacing: -1.3px;
	}
	p {
		color: #717171;
		font-size: 20px;
		font-weight: 400;
	}
`;
export default Home;
