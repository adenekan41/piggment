/* -------------------------------------------------------------------------- */
/*                            External Dependencies                           */
/* -------------------------------------------------------------------------- */

import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

/* --------------------------- Internal Dependency -------------------------- */

import SEO from 'components/seo';

/* ---------------------------- Image Dependency ---------------------------- */

import { ReactComponent as Banner } from '../assets/icons/icon-terms.svg';

const Privacy = () => {
	return (
		<>
			<SEO title="Privacy policy" />
			<Header>
				<div className="container">
					<div className="row align-items-center">
						<div className="col-md-8">
							<article>
								<h1>Privacy policy</h1>
								<p>
									Need to talk to us ?{' '}
									<a href="mailto:hellocodewonders@gmail.com">Email Us</a>
								</p>
							</article>
						</div>
						<div className="col-md-4 d-none d-md-block">
							<Banner className="w-100 h-100" />
						</div>
					</div>
				</div>
			</Header>
			<Wrapper>
				<div className="container">
					<p>
						At Piggment.co, accessible from www.piggment.co, one of our main
						priorities is the privacy of our visitors. This Privacy Policy
						document contains types of information that is collected and
						recorded by Piggment.co and how we use it.
					</p>

					<p>
						If you have additional questions or require more information about
						our Privacy Policy, do not hesitate to{' '}
						<Link to="/about">contact us.</Link>
					</p>

					<p>
						This Privacy Policy applies only to our online activities and is
						valid for visitors to our website with regards to the information
						that they shared and/or collect in Piggment.co. This policy is not
						applicable to any information collected offline or via channels
						other than this website.
					</p>

					<h4>Consent</h4>

					<p>
						By using our website, you hereby consent to our Privacy Policy and
						agree to its terms.
					</p>

					<h4>Information we collect</h4>

					<p>
						The personal information that you are asked to provide, and the
						reasons why you are asked to provide it, will be made clear to you
						at the point we ask you to provide your personal information.
					</p>
					<p>
						If you contact us directly, we may receive additional information
						about you such as your name, email address, phone number, the
						contents of the message and/or attachments you may send us, and any
						other information you may choose to provide.
					</p>
					<p>
						When you register for an Account, we may ask for your contact
						information, including items such as name, company name, address,
						email address, and telephone number.
					</p>

					<h4>How we use your information</h4>

					<p>
						We use the information we collect in various ways, including to:
					</p>

					<ul>
						<li>Provide, operate, and maintain our website</li>
						<li>Improve, personalize, and expand our website</li>
						<li>Understand and analyze how you use our website</li>
						<li>Develop new products, services, features, and functionality</li>
						<li>
							Communicate with you, either directly or through one of our
							partners, including for customer service, to provide you with
							updates and other information relating to the webste, and for
							marketing and promotional purposes
						</li>
						<li>Send you emails</li>
						<li>Find and prevent fraud</li>
					</ul>

					<h4>Log Files</h4>

					<p>
						Piggment.co follows a standard procedure of using log files. These
						files log visitors when they visit websites. All hosting companies
						do this and a part of hosting services&apos; analytics. The
						information collected by log files include internet protocol (IP)
						addresses, browser type, Internet Service Provider (ISP), date and
						time stamp, referring/exit pages, and possibly the number of clicks.
						These are not linked to any information that is personally
						identifiable. The purpose of the information is for analyzing
						trends, administering the site, tracking users&apos; movement on the
						website, and gathering demographic information.
					</p>

					<h4>Children&apos;s Information</h4>

					<p>
						Another part of our priority is adding protection for children while
						using the internet. We encourage parents and guardians to observe,
						participate in, and/or monitor and guide their online activity.
					</p>

					<p>
						Piggment.co does not knowingly collect any Personal Identifiable
						Information from children under the age of 13. If you think that
						your child provided this kind of information on our website, we
						strongly encourage you to contact us immediately and we will do our
						best efforts to promptly remove such information from our records.
					</p>
				</div>
			</Wrapper>
		</>
	);
};
const Header = styled.header`
	background: #fff8f0;
	min-height: 24em;
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

const Wrapper = styled.div`
	margin: 5.5rem 0;
	h4 {
		font-size: calc(var(--font-md) + 1px);
		color: var(--black);
		font-weight: 600;
	}
	p {
		color: var(--black);
		font-size: var(--font-sm);
		line-height: 1.6;
	}
`;
export default Privacy;
