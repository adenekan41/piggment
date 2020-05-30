import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import { ReactComponent as Logo } from '../../assets/icons/logo_.svg';
import { ReactComponent as Love } from '../../assets/icons/icon-love.svg';

const Footer = ({ explore }) => {
	return (
		<FooterWrapper explore={explore}>
			<div className="container">
				<div className="row">
					<div className="col-xs-12 col-md-3">
						<Logo />
						<h6>
							A curated collection of amazingly colored gradients for designers,
							developers and art makers over the world.
							<br />
							<br />
							Copyright © {new Date().getFullYear()}, Piggment.
						</h6>
					</div>
					<div className="col-xs-12 col-md ">
						<h5>Piggment</h5>

						<ul className="list-unstyled quick-links">
							<li>
								<Link to="/explore" aria-label="Navigate To Explore Page">
									Explore Gradients
								</Link>
							</li>
							<li>
								<Link to="/palette" aria-label="Navigate To Generate Page">
									Gradient Palettes
								</Link>
							</li>
							<li>
								<Link to="/generate" aria-label="Navigate To Generate Page">
									Generate Gradients
								</Link>
							</li>
							<li>
								<Link
									to="/generate-palette"
									aria-label="Navigate To Generate Palette Page"
								>
									Generate Palettes
								</Link>
							</li>
							<li>
								<Link
									to="/contrast-checker"
									aria-label="Navigate To Generate Page"
								>
									Contrast Checker
								</Link>
							</li>

							<li>
								<Link to="/saved" aria-label="Navigate To Pocket Page">
									Saved Gradients
								</Link>
							</li>
						</ul>
					</div>
					<div className="col-xs-12 col-md ">
						<h5>Creator</h5>
						<ul className="list-unstyled quick-links">
							<li>
								<a
									href="https://codewonders.dev"
									aria-label="Navigate To Codewonders Page"
									target="_blank"
									rel="noopener noreferrer"
								>
									@codewonders
								</a>
							</li>
							<li>
								<a
									href="https://codewonders.dev/about"
									aria-label="Navigate To Codewonders Page"
									target="_blank"
									rel="noopener noreferrer"
								>
									About Codewonders
								</a>
							</li>
							<li>
								<a
									href="https://codewonders.dev/projects"
									aria-label="Navigate To Codewonders Page"
									target="_blank"
									rel="noopener noreferrer"
								>
									Codewonders Projects
								</a>
							</li>
						</ul>
					</div>

					<div className="col-xs-12 col-md ">
						<h5>Company</h5>

						<ul className="list-unstyled quick-links">
							<li>
								<Link
									to="/privacy"
									aria-label="Navigate To Privacy policy page"
								>
									About
								</Link>
							</li>
							<li>
								<Link
									to="/terms"
									aria-label="Navigate To Terms and conditon page"
								>
									Terms and conditons
								</Link>
							</li>
							<li>
								<Link
									to="/privacy"
									aria-label="Navigate To Privacy policy page"
								>
									Privacy Policy
								</Link>
							</li>
						</ul>
					</div>
					<div className="col-xs-12 col-md ">
						<h5>Connect</h5>
						<ul className="list-unstyled quick-links">
							<li>
								<a
									href="https://twitter.com/code_wonders"
									aria-label="Navigate To Codewonders Twitter"
									target="_blank"
									rel="noopener noreferrer"
								>
									Twitter
								</a>
							</li>
							<li>
								<a
									href="https://github.com/adenekan41"
									aria-label="Navigate To Github"
									target="_blank"
									rel="noopener noreferrer"
								>
									Github
								</a>
							</li>
							<li>
								<a
									href="https://instagram.com/code_wonders"
									aria-label="Navigate To Instagram"
									target="_blank"
									rel="noopener noreferrer"
								>
									Instagram
								</a>
							</li>
							<li>
								<a
									href="https://linkedin.com/in/codewonders"
									aria-label="Navigate To Linkedin"
									target="_blank"
									rel="noopener noreferrer"
								>
									Linkedin
								</a>
							</li>
						</ul>
					</div>
				</div>
				<p className="text-center">
					Created with <Love /> by Adenekan Wonderful
				</p>
			</div>
		</FooterWrapper>
	);
};
const FooterWrapper = styled.footer`
	border-top: 1px solid #e2e2e2;

	padding: 3rem 0 1rem;
	@media (max-width: 990px) {
		display: ${(props) => props.explore && 'none'};
	}
	svg {
		height: 30px;
		width: auto;
		display: block;
		margin: 0rem auto 1rem 0;
	}
	h5 {
		font-weight: 600;
		font-size: var(--font-sm);
		line-height: 22px;
		/* identical to box height, or 183% */

		color: #787878;
	}
	p {
		font-style: italic;
		font-weight: 500;
		font-size: 13px;
		line-height: 22px;
		/* identical to box height, or 220% */

		color: #787878;
		margin-top: 2rem;
		svg {
			display: inline;
			height: 12px;
			fill: red;
			margin: 0 2px;
		}
	}
	h6 {
		font-weight: 400;
		font-size: 13px;
		line-height: 25px;
		/* identical to box height, or 220% */

		color: #787878;
	}
	ul {
		li {
			a {
				font-style: normal;
				font-weight: normal;

				/* or 183% */
				font-size: 13px;
				line-height: 31px;
				color: #787878;
			}
		}
	}
`;

Footer.propTypes = {
	explore: PropTypes.bool,
};

export default Footer;
