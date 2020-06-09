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

const Terms = () => {
	return (
		<>
			<SEO title="Terms and conditions" />
			<Header>
				<div className="container">
					<div className="row align-items-center">
						<div className="col-md-8">
							<article>
								<h1>Terms and conditions</h1>
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
					<h4>1. Terms</h4>

					<p>
						By accessing this Website, accessible from www.piggment.co, you are
						agreeing to be bound by these Website Terms and Conditions of Use
						and agree that you are responsible for the agreement with any
						applicable local laws. If you disagree with any of these terms, you
						are prohibited from accessing this site. The materials contained in
						this Website are protected by copyright and trade mark law. .
					</p>

					<h4>2. Use License</h4>

					<p>
						Permission is granted to temporarily download one copy of the
						materials on Piggment&apos;s Website for personal, non-commercial
						transitory viewing only. This is the grant of a license, not a
						transfer of title, and under this license you may not:
					</p>

					<ul>
						<li>modify or copy the materials;</li>
						<li>
							use the materials for any commercial purpose or for any public
							display;
						</li>
						<li>
							attempt to reverse engineer any software contained on
							Piggment&apos;s Website;
						</li>
						<li>
							remove any copyright or other proprietary notations from the
							materials; or
						</li>
						<li>
							transferring the materials to another person or &quot;mirror&quot;
							the materials on any other server.
						</li>
					</ul>

					<p>
						This will let Piggment to terminate upon violations of any of these
						restrictions. Upon termination, your viewing right will also be
						terminated and you should destroy any downloaded materials in your
						possession whether it is printed or electronic format.
					</p>

					<h4>3. Disclaimer</h4>

					<p>
						All the materials on Piggment’s Website are provided "as is".
						Piggment makes no warranties, may it be expressed or implied,
						therefore negates all other warranties. Furthermore, Piggment does
						not make any representations concerning the accuracy or reliability
						of the use of the materials on its Website or otherwise relating to
						such materials or any sites linked to this Website.
					</p>

					<h4>4. Limitations</h4>

					<p>
						Piggment or its suppliers will not be hold accountable for any
						damages that will arise with the use or inability to use the
						materials on Piggment’s Website, even if Piggment or an authorize
						representative of this Website has been notified, orally or written,
						of the possibility of such damage. Some jurisdiction does not allow
						limitations on implied warranties or limitations of liability for
						incidental damages, these limitations may not apply to you.
					</p>

					<h4>5. Revisions and Errata</h4>

					<p>
						The materials appearing on Piggment’s Website may include technical,
						typographical, or photographic errors. Piggment will not promise
						that any of the materials in this Website are accurate, complete, or
						current. Piggment may change the materials contained on its Website
						at any time without notice. Piggment does not make any commitment to
						update the materials.
					</p>

					<h4>6. Links</h4>

					<p>
						Piggment has not reviewed all of the sites linked to its Website and
						is not responsible for the contents of any such linked site. The
						presence of any link does not imply endorsement by Piggment of the
						site. The use of any linked website is at the user’s own risk.
					</p>

					<h4>7. Site Terms of Use Modifications</h4>

					<p>
						Piggment may revise these Terms of Use for its Website at any time
						without prior notice. By using this Website, you are agreeing to be
						bound by the current version of these Terms and Conditions of Use.
					</p>

					<h4>8. Your Privacy</h4>

					<p>
						Please read <Link to="/privacy">our Privacy Policy</Link>.
					</p>

					<h4>9. Governing Law</h4>

					<p>
						Any claim related to Piggment&apos;s Website shall be governed by
						the laws of ng without regards to its conflict of law provisions.
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
export default Terms;
