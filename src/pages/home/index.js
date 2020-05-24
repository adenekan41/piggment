import React, { useCallback, useState, useEffect } from 'react';
import styled from 'styled-components';
import randomWords from 'random-words';

import { generateGradient, get_random } from 'utils';

import { Link } from 'react-router-dom';
import Card, { BorderWrap } from 'components/card';
import { ReactComponent as Love } from '../../assets/icons/icon-love.svg';
import { ReactComponent as Code } from '../../assets/icons/icon-code.svg';
import { ReactComponent as Save } from '../../assets/icons/icon-save.svg';
import { ReactComponent as Banner } from '../../assets/icons/banner.svg';

const Home = () => {
	const [state, setState] = useState([]);

	const gradient = useCallback(() => {
		for (let i = 0; i < 6; i++) {
			setState((s) => [
				...s,
				{
					name: randomWords({ exactly: 2, join: ' ' }),
					color: generateGradient(),
				},
			]);
		}
	}, []);

	useEffect(() => {
		if (state.length < 6) {
			gradient();
		}
	}, [gradient, state]);

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

								<button className="btn btn-pigment" type="button">
									Generate Gradients
								</button>
							</article>
						</div>

						<div
							className="image__banner"
							style={{
								background:
									state.length > 0 && state[get_random([3, 4, 5])].color,
							}}
						>
							<div className="write__up">
								<article>
									<h4>{randomWords({ exactly: 2, join: ' ' })}</h4>
									<p>By Pigment Gradients</p>
								</article>
								<BorderWrap className="float-right border-wrap">
									<Code className="mr-2" />
									<Save className="mr-2" />
									<Love />
								</BorderWrap>
							</div>
						</div>
					</div>
				</div>
			</Header>
			<Section>
				<div className="container">
					<div className="d-flex justify-content-between explore_more">
						<h2>Explore gradients.</h2>
						<Link to="/explore">See More</Link>
					</div>
					<div className="grid">
						{state.map((bg_gradient, index) => (
							<Card data={bg_gradient} key={index + bg_gradient.name} />
						))}
					</div>

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
							<Link className="btn btn-pigment mr-md-3" type="button">
								Start Generating
							</Link>
							<Link
								className="btn btn-outline-pigment"
								type="button"
								to="/explore"
							>
								> Explore Gradients
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
					<p>We are super fast and inspiring.</p>
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
	justify-content: center;
	text-align: center;
	display: flex;
	h1 {
		font-weight: 900;
		font-size: 3.82em;
		color: var(--black);
		letter-spacing: -1.3px;
	}
	.pos-rel {
		position: relative;
	}
	p {
		color: #717171;
		margin: 6px 0;
		font-size: 17px;
		font-weight: 400;
	}
	button {
		padding: 12px 40px;
		border: none;
		font-size: 15px;
		font-weight: 500;
		margin-top: 2rem;
	}

	.image__banner {
		height: 400px;
		width: 100%;

		border-radius: 7px;
		position: absolute;

		top: 27rem;
		&:before {
			content: '';
			position: absolute;

			height: 100%;
			width: 100%;
			background-size: calc(20 * 0.5px) calc(20 * 0.5px);
			background-image: radial-gradient(#0a113e30 0.5px, transparent 0.5px);
			left: 0;
			top: 0;
			border-radius: 0;
		}
		.write__up {
			padding: 0 25px;
			background: #0a113e30;
			border-radius: 6px;
			display: flex;
			width: 100%;
			align-items: center;
			justify-content: space-between;
			position: absolute;
			text-align: left;
			bottom: 0;
			left: 0;
			height: 80px;

			h4 {
				font-size: 17px;
				text-transform: capitalize;
				font-weight: 500;
				color: #ececec;
				margin-bottom: 0;
			}
			p {
				font-size: 13px;
				color: #dedede;
			}
			svg {
				width: 17px;
				fill: #dedede;
			}
		}
	}
`;

const Section = styled.section`
	margin-top: 26rem;
	.w-70 {
		width: 70px;
	}
	.explore_more {
		align-items: center;
		a {
			color: var(--accent);
			border-bottom: 2px solid var(--theme-primary);
			font-size: 15px;
		}
	}
	h2 {
		font-weight: 600;
		font-size: 1.62em;
		color: var(--black);
		margin-bottom: 1.4rem;
		letter-spacing: -1.3px;
	}
	.grid {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
		grid-template-rows: 1fr;
		grid-column-gap: 40px;
		grid-row-gap: 40px;
	}
	figure {
		min-height: 230px;
		border-radius: 8px;
		transition: all 0.4s ease;
	}
	.small__colors {
		height: 18px;
		width: 18px;
		margin: 0 1.5px;
		border-radius: 50%;
		display: inline-block;
		transition: all 0.4s ease;
		&:hover {
			transform: scale(1.14);
		}
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
