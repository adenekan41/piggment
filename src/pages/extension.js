/* -------------------------------------------------------------------------- */
/*                            External Dependencies                           */
/* -------------------------------------------------------------------------- */

import React, { useEffect, useContext } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

/* -------------------------- Internal Dependencies ------------------------- */

import SEO from 'components/seo';
import GradientContext from '../context';
/* --------------------------- Image Dependency --------------------------- */
import Banner from '../assets/icons/icon-cream.svg';

const Extension = () => {
	const { state, loadGradients } = useContext(GradientContext);

	useEffect(() => {
		if (state.length < 7) {
			loadGradients(7);
		}
	}, [loadGradients, state]);

	return (
		<>
			<SEO />
			<main>
				<Header>
					<div className="container">
						<div className="row align-items-center justify-content-center  pos-rel">
							<div className="col-md-7">
								<article>
									<h1>Gradient in your new tab.</h1>
									<p>
										Generate, explore & download gradients all in your chrome
										new tab.
									</p>

									<a
										className="btn btn-piggment mr-md-3 mr-2"
										href="https://chrome.google.com/webstore"
									>
										Install Chrome Extension
									</a>
								</article>
							</div>
						</div>
					</div>
				</Header>
				<Section>
					<div className="container">
						<h3 className="text-center">
							Crafted to inspire you at the click of a <b>new tab</b>.
						</h3>
						<p className="text-center">
							Comes in the theme you have always loved
						</p>
						<div className="row">
							<div className="col-md-6">
								<img
									src="https://i.ibb.co/rfMtVxp/Screenshot-2020-07-16-at-23-53-39.png"
									className="chrome__ext"
									alt="Light Smoke Theme"
								/>
								<p>
									<a className="" href="https://chrome.google.com/webstore">
										Light Smoke
									</a>
								</p>
							</div>
							<div className="col-md-6">
								<img
									src="https://i.ibb.co/2sQgMrV/Screenshot-2020-07-16-at-23-53-48.png"
									className="chrome__ext"
									alt="Gummy Black Theme"
								/>
								<p>
									<a className="" href="https://chrome.google.com/webstore">
										Gummy Black
									</a>
								</p>
							</div>
						</div>
					</div>
				</Section>
				<SectionMore>
					<div className="container">
						<div className="row align-items-center">
							<div className="col-md-5">
								<h3>Open a new tab and be inspired.</h3>
								<p>
									Generate, save and search right on your new tab. Built to
									always inspired you
								</p>
								<br />
								<a
									className="btn btn-piggment mr-3"
									href="https://chrome.google.com/webstore"
								>
									Install Chrome Extension
								</a>
								<Link className="btn btn-outline-piggment" to="/explore">
									Explore Gradients
								</Link>
							</div>
							<div className="col-md-7 d-none d-md-block">
								<img src={Banner} alt="Banner" />
							</div>
						</div>
					</div>
				</SectionMore>
				<SectionTrusted>
					<div>
						<p>We are super fast and inspiring and open sourced.</p>
						<h2>Trusted by thousands of creators.</h2>
						<br />
						<a
							href="https://www.producthunt.com/posts/piggment?utm_source=badge-featured&utm_medium=badge&utm_souce=badge-piggment"
							target="_blank"
							rel="noopener noreferrer"
						>
							<img
								src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=204989&theme=light"
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
	background: #fff8f0;

	background-size: calc(20 * 0.5px) calc(20 * 0.5px);
	background-image: radial-gradient(#0a113e47 0.5px, transparent 0.5px);

	text-align: center;
	height: 33em;
	padding: 9rem;
	clip-path: polygon(100% 0%, -360% 0, 100% 100%);

	h1 {
		font-weight: 900;
		font-size: calc(var(--font-lg) + 2px);
		color: var(--black);
		letter-spacing: -1.3px;
		line-height: 1.1;
	}

	p {
		color: #717171;
		margin: 6px 0;
		font-size: calc(var(--font-sm) + 1.1px);
		font-weight: 400;
	}
	a.btn {
		padding: 12px 40px;
		border: none;
		font-size: var(--font-sm);
		font-weight: 500;
		margin-top: 2rem;
		@media (max-width: 990px) {
			font-size: calc(var(--font-sm) - 1px);
		}
	}
`;

const Section = styled.section`
	padding: 4rem 0;

	.w-70 {
		width: 70px;
	}
	.chrome__ext {
		width: 100%;
		border: 6px solid #101331;
		border-radius: 9px;
		box-shadow: 0 0px 0px 4px #c5c5c5;
		margin-top: 2rem;
	}
	h3 {
		font-size: calc(var(--font-x-md) + 9px);
		color: var(--black);
		font-weight: 500;
		b {
			color: var(--accent);
			font-weight: 900;
		}
	}
	p,
	a {
		color: #717171;
		margin: 6px 0;
		font-size: calc(var(--font-sm) + 1.1px);
		font-weight: 400;
		text-align: center;
	}
	a {
		display: block;
		color: var(--accent);
		margin-top: 2rem;
	}
`;

const SectionMore = styled.section`
	background: #f0faff;
	min-height: 20em;
	display: flex;
	margin-top: 1rem;
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
	img {
		width: 100%;
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
		font-size: var(--font-lg);
		text-align: center;
		color: var(--black);
		letter-spacing: -1.3px;
	}
	p {
		color: #717171;
		font-size: var(--font-x-sm) + 1px;
		font-weight: 400;
	}
`;
export default Extension;
