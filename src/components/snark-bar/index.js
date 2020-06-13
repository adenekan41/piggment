/* -------------------------------------------------------------------------- */
/*                            External Dependecies                            */
/* -------------------------------------------------------------------------- */

import React, { useContext } from 'react';
import styled from 'styled-components';

/* --------------------------- Internal Dependency -------------------------- */
import GradientContext from 'context';

/* ---------------------------- Image Dependency ---------------------------- */
import { ReactComponent as Close } from '../../assets/icons/icon-close.svg';
import { ReactComponent as Success } from '../../assets/icons/icon-success.svg';

const SnarkBar = () => {
	const { snarkbars, removeSnarkbar } = useContext(GradientContext);

	return (
		<SnarkBarWrapper>
			{snarkbars &&
				snarkbars.map((snark) => (
					<Snark className="fadeIn">
						<p>
							<SuccessSnark />{' '}
							<span dangerouslySetInnerHTML={{ __html: snark.msg }} />
						</p>
						<CloseSnark onClick={() => removeSnarkbar(snark.id)} />
					</Snark>
				))}
		</SnarkBarWrapper>
	);
};

const SnarkBarWrapper = styled.div`
	position: fixed;

	z-index: 9999;
	min-width: 18%;
	top: 1.5rem;

	right: 1.5rem;
	@media (max-width: 787px) {
		min-width: 80%;
		top: 3rem;
		left: 50%;
		right: 0;
		transform: translate(-50%, 10px);
	}
`;

const Snark = styled.div`
	background: var(--black);
	padding: 10px 15px;
	border-radius: 5px;
	margin-bottom: 0.7rem;
	display: flex;
	justify-content: space-between;
	p {
		margin: 0;
		font-size: calc(var(--font-sm) - 1px);
		color: #fff8f0;
	}
	a {
		color: #f1cfaa;
		text-decoration: underline;
		font-weight: 600;
		margin-left: 0.4rem;
	}
`;

const CloseSnark = styled(Close)`
	cursor: pointer;
	width: 11px;
	&:hover {
		path {
			fill: red;
		}
	}
	path {
		fill: #fff8f0;
	}
`;

const SuccessSnark = styled(Success)`
	width: 22px;
	vertical-align: bottom;
	margin-right: 0.3rem;
	path {
		fill: #f1cfaa;
	}
`;
export default SnarkBar;
