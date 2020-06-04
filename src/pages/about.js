import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import SEO from 'components/seo';

import { ReactComponent as Banner } from '../assets/icons/banner-pallet.svg';
import { ReactComponent as BannerMore } from '../assets/icons/banner-contrast.svg';

const AboutPage = () => {
	return (
		<>
			<SEO
				title="About Piggment"
				description="	We are a one man team trying to deliver the best experience."
			/>
			<Header>
				<div className="container">
					<div className="row align-items-center">
						<div className="col-md-7">
							<article>
								<h1>We are piggment.</h1>
								<p>
									We are a one man team trying to deliver the best experience.
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
				<SectionMore>
					<div className="container">
						<div className="row align-items-center">
							{' '}
							<div className="col-md-5 d-none d-md-block">
								<BannerMore className="w-100 h-100" />
							</div>
							<div className="col-md-7 text-md-left text-center">
								<h3>We are more than just gradients.</h3>
								<p>
									We are a curated collection of amazingly colored gradients for
									designers, developers and art makers over the world. now you
									can generate, explore, save, easy CSS crossbrowser gradient
									codes all in one place.
								</p>
								<Link className="btn btn-piggment mr-3" to="/generate-palette">
									Start Generating
								</Link>
								<Link className="btn btn-outline-piggment" to="/palette">
									Explore Palettes
								</Link>
							</div>
						</div>
					</div>
				</SectionMore>
				<SectionTeam>
					<div className="container">
						<div className="row align-items-center justify-content-center">
							<div className="col-md-6">
								<h3>The creator.</h3>
								<div>
									<img
										src="https://i.ibb.co/W32F4F3/wonderful-22-copy.png"
										alt="Adenekan Wonderful"
									/>
									<h4>Adenekan Wonderful</h4>
									<p>
										<a
											href="https://codewonders.dev"
											target="_blank"
											rel="noopener noreferrer"
										>
											Website
										</a>{' '}
										|{' '}
										<a
											href="https://twitter.com/code_wonders"
											target="_blank"
											rel="noopener noreferrer"
										>
											Twitter
										</a>{' '}
										|{' '}
										<a
											href="https://linkedin.com/in/codewonders"
											target="_blank"
											rel="noopener noreferrer"
										>
											Linkedin
										</a>{' '}
										|{' '}
										<a
											href="https://github.com/adenekan41"
											target="_blank"
											rel="noopener noreferrer"
										>
											Github
										</a>{' '}
										|{' '}
										<a
											href="https://instagram.com/codewonders"
											target="_blank"
											rel="noopener noreferrer"
										>
											Instagram
										</a>
									</p>
									<a
										className="btn btn-piggment"
										target="_blank"
										rel="noopener noreferrer"
										href="https://www.buymeacoffee.com/codewonders"
									>
										<img
											src="https://cdn.buymeacoffee.com/buttons/bmc-new-btn-logo.svg"
											alt="Buy me a coffee"
										/>
										<span>Buy me a coffee</span>
									</a>
								</div>
							</div>
						</div>
					</div>
				</SectionTeam>
				<SectionTrusted>
					<div>
						<p>Want to talk ?</p>
						<h2>Send us a message.</h2>
						<div className="container">
							<div className="row align-items-center justify-content-center">
								<div className="col-md-6">
									<form
										action="https://formspree.io/hellocodewonders@gmail.com"
										method="POST"
									>
										<input
											className="form-control"
											placeholder="Full Name"
											type="text"
											name="Name"
											required
										/>
										<input
											className="form-control"
											placeholder="Email Address"
											type="email"
											name="Email"
											required
										/>
										<textarea
											className="form-control"
											placeholder="Message"
											name="Message"
											required
										/>
										<button
											className="btn btn-piggment btn-block"
											type="submit"
										>
											Send Message
										</button>
									</form>
								</div>
							</div>
						</div>
					</div>
				</SectionTrusted>
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
	/* padding: 3rem 0 0; */
	background: #fff;
	min-height: 100vh;
`;

const SectionMore = styled.section`
	background: #fff;
	min-height: 17em;
	display: flex;
	margin-top: 0rem;
	padding: 4em 0;
	align-items: center;
	background-size: calc(20 * 0.5px) calc(20 * 0.5px);
	background-image: radial-gradient(#0a113e47 0.5px, transparent 0.5px);

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

const SectionTeam = styled.div`
	background: #fff8f0;
	text-align: center;
	display: flex;
	background-size: calc(20 * 0.5px) calc(20 * 0.5px);
	background-image: radial-gradient(#0a113e47 0.5px, transparent 0.5px);
	margin-top: 0rem;
	padding: 4em 0;
	align-items: center;

	h3 {
		font-weight: 900;
		font-size: var(--font-lg);
		color: var(--black);
		letter-spacing: -1.3px;
		margin-bottom: 1.4rem;
	}
	img {
		width: 180px;
		border-radius: 50%;
		object-fit: cover;
		height: 180px;
	}
	h4 {
		font-weight: 900;
		font-size: calc(var(--font-md) + 1px);
		color: var(--black);
		letter-spacing: -1.3px;
		margin-top: 1.4rem;
	}
	p {
		color: var(--accent);
		font-size: var(--font-x-sm);
		font-weight: 400;
	}
	a {
		padding: 10px 11px;
		border: none;
		font-size: var(--font-sm);
		color: var(--accent);
		font-weight: 500;
		margin-top: 1rem;
		img {
			width: 20px;
			height: 20px;
			object-fit: contain;
		}
	}
`;

const SectionTrusted = styled.section`
	padding: 4rem;
	/* display: flex; */
	/* justify-content: center; */
	min-height: 10em;
	padding: 6em 0;
	text-align: center;
	background: #fff8f0;
	/* align-items: center; */
	h2 {
		font-weight: 900;
		font-size: var(--font-lg);
		text-align: center;
		color: var(--black);
		letter-spacing: -1.3px;
		margin-bottom: 2rem;
	}
	p {
		color: #717171;
		font-size: var(--font-x-sm) + 1px;
		font-weight: 400;
	}
	input,
	textarea {
		border: none;
		padding: 30px 25px;
		font-size: 15px;
		margin-bottom: 2rem;
	}
`;

export default AboutPage;
