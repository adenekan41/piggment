/* -------------------------------------------------------------------------- */
/*                            External Dependencies                           */
/* -------------------------------------------------------------------------- */

import React, { useEffect, useContext, useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Carousel } from 'react-bootstrap';
/* -------------------------- Internal Dependencies ------------------------- */

import SEO from 'components/seo';
import GradientContext from '../context';
import Card from '../components/card';
import GradientLayout from '../components/card/card-container';

/* --------------------------- Image Dependency --------------------------- */
import Banner from '../assets/icons/banner.svg';

const Home = () => {
	const { state, palette, loadGradients, loadpalettes } = useContext(
		GradientContext
	);
	const [index, setIndex] = useState({
		index: 0,
		state: 3,
	});

	const handleSelect = (selectedIndex) => {
		setIndex({
			index: selectedIndex,
			state: selectedIndex + 3,
		});
	};

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
				<Header
					style={{
						background: `linear-gradient(${state[index.state || 3]?.color
							.split(' ')
							.slice(1, 4)
							.join('')} -200%, white)`,
					}}
					className="fadeIn"
				>
					<div className="container">
						<div className="row align-items-center justify-content-center  pos-rel">
							<div className="col-md-7">
								<article>
									<h1>Discover just the perect gradient.</h1>
									<p>
										Create the perfect gradient and palettes for your next
										project.
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
										Used by over <span>100K</span> creators.
									</p>
								</article>
							</div>
							<Carousel
								indicators={false}
								activeIndex={index.index}
								onSelect={handleSelect}
								nextIcon={
									<img
										src="data:image/svg+xml,%0A%3Csvg width='34' height='16' viewBox='0 0 34 16' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M6.99719 7.00045H30.1662L24.5765 1.41068L25.9964 0.000732422L33.9961 8.00041L25.9964 16.0001L24.5865 14.5901L30.1662 9.00037H6.99719V7.00045Z' fill='black' fill-opacity='0.54'/%3E%3C/svg%3E%0A"
										alt=""
									/>
								}
								prevIcon={
									<img
										src="data:image/svg+xml,%0A%3Csvg width='34' height='16' viewBox='0 0 34 16' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cg id='arrow_back_24px'%3E%3Cpath id='icon/navigation/arrow_back_24px' d='M27.0028 7.00045H3.83375L9.42352 1.41068L8.00358 0.000732422L0.00390625 8.00041L8.00358 16.0001L9.41352 14.5901L3.83375 9.00037H27.0028V7.00045Z' fill='black' fill-opacity='0.54'/%3E%3C/g%3E%3C/svg%3E%0A"
										alt=""
									/>
								}
							>
								{state.slice(3, 6).map((gradient, i) => (
									<Carousel.Item key={i}>
										{gradient && (
											<Card
												data={
													gradient || {
														name: '1234',
														color:
															'linear-gradient(2deg, rgb(255,255,255,0.4) 3%, rgb(255,255,255,0.8) 30%)',
													}
												}
												type="large"
											/>
										)}
									</Carousel.Item>
								))}
							</Carousel>
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
	min-height: 42em;
	align-items: center;
	/* background-size: calc(20 * 0.5px) calc(20 * 0.5px); */
	/* background-image: radial-gradient(#0a113e47 0.5px, transparent 0.5px); */
	justify-content: center;
	text-align: center;
	display: flex;
	-webkit-transition: background 10s ease-out;
	-moz-transition: background 10s ease-out;
	-o-transition: background 10s ease-out;
	transition: background 10s ease-out;

	h1 {
		/* font-weight: 900;
		font-size: var(--font-x-lg);
		color: var(--black);
		letter-spacing: -1.3px; */
		font-weight: 600;
		margin: 0.47em 0;
		font-size: calc(var(--font-x-lg) + 5px);
		color: var(--black);
		letter-spacing: -1.5px;
	}
	.pos-rel {
		position: relative;
	}
	p {
		color: #5e6986;
		margin: 5px 0;
		font-size: calc(var(--font-sm) + 1.1px);
		font-weight: 400;
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
		}
		.carousel-control-next {
			right: -95px;
		}
		.carousel-control-prev {
			left: -95px;
		}
	}
	.large__sum-card {
		position: absolute;
		/* text-align: left;
		top: 27rem; */
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
