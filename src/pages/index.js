/* -------------------------------------------------------------------------- */
/*                            External Dependencies                           */
/* -------------------------------------------------------------------------- */

import React, { useEffect, useContext } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
/* -------------------------- Internal Dependencies ------------------------- */

import SEO from 'components/seo';
import GradientContext from '../context';
import GradientLayout from '../components/card/card-container';

/* --------------------------- Image Dependency --------------------------- */
import Banner from '../assets/icons/banner.svg';

const Home = () => {
	const { state, palette, loadGradients, loadpalettes } = useContext(
		GradientContext
	);

	useEffect(() => {
		if (state.length < 7) {
			loadGradients(7);
			loadpalettes(6);
		}
	}, [loadGradients, state, loadpalettes]);

	return (
		<>
			<SEO />

			<main>
				<Header className="fadeIn">
					<div className="container">
						<div className="row align-items-center justify-content-center  pos-rel">
							<div className="col-lg-7">
								<article>
									<h1>
										Discover just the perfect <b>gradient</b>
									</h1>
									<p>
										Find the best color gradient and palettes for your next
										design project.
									</p>

									<Link
										className="btn btn-piggment mr-md-3 mr-2"
										to="/generate"
									>
										Start Generating
									</Link>
									<Link className="btn btn-outline-piggment" to="/explore">
										Explore Gradients
									</Link>
									<p className="mt-3">
										You can be colorful too!. Join over <b>120K</b> active
										creators.
									</p>
								</article>
							</div>
							{/* <img src="https://i.ibb.co/ZBCFRxM/Group-9.png" /> */}
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
							<Link className="btn btn-piggment" to="/explore">
								See All Gradients
							</Link>
						</div>
					</div>
				</Section>
				<SectionMore>
					<div className="container">
						<div className="row align-items-center">
							<div className="col-md-5">
								<h3>Color inspiration & palette creation made easy</h3>
								<p>
									Piggment is the best way to browse, create and personalize
									gradient palettes.
								</p>
								<Link className="btn btn-piggment mr-3" to="/generate-palette">
									Start Generating
								</Link>
								<Link className="btn btn-outline-piggment" to="/palette">
									Explore Palettes
								</Link>
							</div>
							<div className="col-md-7 d-none d-md-block">
								<img src={Banner} alt="Banner" />
							</div>
						</div>
					</div>
				</SectionMore>
				<Section style={{ marginTop: '6rem' }}>
					<div className="container">
						<GradientLayout
							header="Featured Palettes."
							state={palette}
							noRefresh
							palette
							mode="see-more"
						/>

						<div className="m-auto text-center more__cards">
							<p>Need more palettes?</p>
							<Link className="btn btn-piggment" to="/palettes">
								See All Palettes
							</Link>
						</div>
					</div>
				</Section>
				<SectionTrusted>
					<div>
						<p>We are super fast, inspiring and open sourced.</p>
						<h2>Trusted by over 100k creators.</h2>
						<br />
						<a
							href="https://www.producthunt.com/posts/piggment?utm_source=badge-featured&utm_medium=badge&utm_souce=badge-piggment"
							target="_blank"
							rel="noopener noreferrer"
						>
							<img
								src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=204989&theme=dark"
								alt="Piggment - Gradients and colors for the next smart creator | Product Hunt Embed"
								width="250px"
								height="54px"
							/>
						</a>
					</div>
				</SectionTrusted>
			</main>
		</>
	);
};

const Header = styled.header`
	/* background: #fff8f0; */
	// background: linear-gradient(180deg, #fce9d4, #ffffff);
	background: linear-gradient(180deg, #fff5ea, #ffffff);
	margin-bottom: 4rem;
	min-height: 35em;
	align-items: center;
	/* background-size: calc(20 * 0.5px) calc(20 * 0.5px); */
	/* background-image: radial-gradient(#0a113e47 0.5px, transparent 0.5px); */
	justify-content: center;
	// text-align: center;
	display: flex;

	@media (max-width: 992px) {
		background: #fff8f0 !important;
	}
	article {
		text-align: center;
	}
	h1 {
		font-weight: 600;
		margin: 0.35em 0;
		font-size: calc(var(--font-x-lg) + 10px);
		color: var(--black);
		letter-spacing: -2.8px;

		color: var(--black);
		line-height: 1.04;
	}
	h1,
	p {
		b {
			background: linear-gradient(90deg, #3512b2, #d18873);
			-webkit-background-clip: text;
			background-clip: text;
			color: transparent;
		}
	}
	.pos-rel {
		position: relative;
	}

	img {
		width: 100%;
	}
	p {
		color: #6f6f6f;
		margin: 12px 0;
		font-size: calc(var(--font-sm) + 1.1px);
		font-weight: 400;
		letter-spacing: -0.1px;
		span {
			color: var(--black);
			font-weight: 800;
		}
	}
	a.btn {
		padding: 12px 40px;
		border: none;
		font-size: var(--font-sm);
		font-weight: 500;
		margin-top: 1.5rem;
		@media (max-width: 990px) {
			font-size: calc(var(--font-sm) - 1px);
		}
	}
	.carousel {
		position: absolute;
		width: 100%;
		height: 400px;
		top: 27rem;
		&-inner {
			height: 100%;
		}
		@media (max-width: 990px) {
			display: none;
		}

		.carousel-control-next,
		.carousel-control-prev {
			background: transparent;
			opacity: 0.9;
			width: 10%;
			@media (max-width: 1095px) {
				display: none;
			}
		}
		.carousel-control-next {
			right: -9%;
		}
		.carousel-control-prev {
			left: -9%;
		}
	}
	.large__sum-card {
		position: absolute;
		/* text-align: left;
		top: 27rem; */
	}
`;

const Section = styled.section`
	margin-top: 2rem;
	@media (max-width: 990px) {
		margin-top: 4rem;
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
			font-size: var(--font-sm);

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
		font-size: var(--font-lg);
		color: var(--black);
		letter-spacing: -1.3px;
		margin-bottom: 1.4rem;
	}
	p {
		color: #717171;
		font-size: var(--font-x-sm);
		font-weight: 400;
	}
	a {
		padding: 10px 30px;
		border: none;
		font-size: var(--font-sm);
		color: var(--accent);
		font-weight: 500;
		margin-top: 1rem;
	}
`;

const SectionTrusted = styled.section`
	padding: 4rem;
	background: var(--black);
	margin-top: 6rem;
	display: flex;
	justify-content: center;
	min-height: 10em;
	padding: 6em 0;
	text-align: center;
	align-items: center;
	h2 {
		font-weight: 900;
		font-size: var(--font-lg);
		text-align: center;
		color: var(--white);
		letter-spacing: -1.3px;
	}
	p {
		color: var(--white);
		opacity: 0.8;
		font-size: var(--font-x-sm) + 1px;
		font-weight: 400;
	}
`;
export default Home;
