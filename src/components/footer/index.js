import React from 'react';
import styled from 'styled-components';
import { ReactComponent as Logo } from '../../assets/icons/logo_.svg';

const Footer = () => {
	return (
		<FooterWrapper>
			<div className="container">
				<div className="row">
					<div className="col-xs-12 col-md-3">
						<Logo />
						<h6>
							Generate, explore, easy CSS copy crossbrowser code all in one
							place
							<br />
							<br />
							@pigmented
						</h6>
					</div>
					<div className="col-xs-12 col-md ">
						<h5>Pigment</h5>

						<ul className="list-unstyled quick-links">
							<li>
								<a href="#0" aria-label="Navigate To About us Page">
									Explore
								</a>
							</li>
							<li>
								<a href="#0" aria-label="Navigate To FAQ Page">
									Generate
								</a>
							</li>
							<li>
								<a href="#0" aria-label="Navigate To Privacy Policy Page">
									Search
								</a>
							</li>
							<li>
								<a href="#0" aria-label="Navigate To Terms & Condition Page">
									Saved
								</a>
							</li>
						</ul>
					</div>
					<div className="col-xs-12 col-md ">
						<h5>Creator</h5>
						<ul className="list-unstyled quick-links">
							<li>
								<a href="#0" aria-label="Navigate To Search for doctors Page">
									@codewonders
								</a>
							</li>
							<li>
								<a href="#0" aria-label="Navigate To Search for hospitals Page">
									About Codewonders
								</a>
							</li>
							<li>
								<a
									href="#0"
									aria-label="Navigate To Cancel an appointment Page"
								>
									Codewonders Projects
								</a>
							</li>
						</ul>
					</div>

					<div className="col-xs-12 col-md ">
						<h5>Top Colors</h5>
						<ul className="list-unstyled quick-links">
							<li>
								<a href="#0" aria-label="Navigate To Lagos Page">
									#0000
								</a>
							</li>
							<li>
								<a href="#0" aria-label="Navigate To Ibadan Page">
									#fff34
								</a>
							</li>
							<li>
								<a href="#0" aria-label="Navigate To Abuja Page">
									#44555
								</a>
							</li>
							<li>
								<a href="#0" aria-label="Navigate To Portharcourt Page">
									#445353
								</a>
							</li>
						</ul>
					</div>
					<div className="col-xs-12 col-md ">
						<h5>Connect</h5>
						<ul className="list-unstyled quick-links">
							<li>
								<a href="#0" aria-label="Navigate To Twitter Page">
									Twitter
								</a>
							</li>
							<li>
								<a href="#0" aria-label="Navigate To Facebook Page">
									Facebook
								</a>
							</li>
							<li>
								<a href="#0" aria-label="Navigate To Instagram Page">
									Instagram
								</a>
							</li>
							<li>
								<a href="#0" aria-label="Navigate To Linkedin Page">
									Linkedin
								</a>
							</li>
						</ul>
					</div>
				</div>
				<p className="text-center">
					Copyright © {new Date().getFullYear()}, Pigment. All rights reserved
				</p>
			</div>
		</FooterWrapper>
	);
};
const FooterWrapper = styled.footer`
	border-top: 1px solid #e2e2e2;

	padding: 3rem 0 1rem;

	svg {
		height: 30px;
		width: auto;
		display: block;
		margin: 0rem auto 1rem 0;
	}
	h5 {
		font-weight: 600;
		font-size: 15px;
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
export default Footer;
