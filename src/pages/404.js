/* -------------------------------------------------------------------------- */
/*                            External Dependencies                           */
/* -------------------------------------------------------------------------- */
import React, { useEffect } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

/* -------------------------- Internal Dependecies -------------------------- */
import SEO from 'components/seo';
import { logException } from 'utils/analytics';

const NotFound = () => {
	useEffect(() => {
		logException('Page Not Found', true);
	}, []);

	return (
		<>
			<SEO title="404 Page not found" />
			<Header>
				<div className="container">
					<div className="row align-items-center justify-content-center">
						<div className="col-md-9">
							<article>
								<img
									src="https://i.ibb.co/s2ZrDKV/1c6b18e4-9f27-41c5-b07c-df9996053de5.png"
									alt="404"
								/>
								<h1>Ouch! Page Not Found</h1>
								<p>
									<Link to="/">Go Home</Link>
								</p>
							</article>
						</div>
					</div>
				</div>
			</Header>
		</>
	);
};

const Header = styled.header`
	background: #fff8f0;
	min-height: 45em;
	align-items: center;
	justify-content: center;
	background-size: calc(20 * 0.5px) calc(20 * 0.5px);
	background-image: radial-gradient(#0a113e47 0.5px, transparent 0.5px);
	display: flex;
	text-align: center;
	h1 {
		font-weight: 900;
		font-size: var(--font-lg);
		color: var(--black);
		margin-bottom: 1.3rem;
		letter-spacing: -1.3px;
	}
	img {
		height: 230px;
		width: auto;
		animation: roll;
		animation-duration: 20s;
		animation-direction: alternate;
		animation-fill-mode: both;
		margin: auto;
		display: block;
		animation-iteration-count: infinite;
	}
	@keyframes roll {
		from {
			transform: rotate(0deg);
		}
		to {
			transform: rotate(360deg);
		}
	}
	p {
		color: #717171;
		margin: 0px 0;
		font-size: calc(var(--font-sm) + 1.1px);
		font-weight: 400;
	}
	a {
		color: var(--accent);
	}
`;

export default NotFound;
