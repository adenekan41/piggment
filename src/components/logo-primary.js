/* -------------------------------------------------------------------------- */
/*                            External Dependencies                           */
/* -------------------------------------------------------------------------- */
import React from 'react';
import styled from 'styled-components';

class LogoPrimary extends React.PureComponent {
	render() {
		return (
			<LogoWrapper>
				<svg
					width="511"
					height="384"
					viewBox="0 0 511 384"
					fill="none"
					className="fadeIn"
					xmlns="http://www.w3.org/2000/svg"
					aria-hidden="true"
				>
					<path
						d="M481.547 0C497.658 30.9021 507.383 64.6028 510.167 99.1781C512.951 133.753 508.74 168.526 497.774 201.511C486.808 234.496 469.302 265.046 446.255 291.419C423.209 317.792 395.073 339.469 363.454 355.215C331.835 370.96 297.353 380.465 261.975 383.186C226.598 385.907 191.019 381.791 157.269 371.074C123.519 360.357 92.2597 343.247 65.2755 320.723C38.2912 298.199 16.1106 270.701 0 239.798L481.547 0Z"
						fill="url(#paint0_linear)"
					/>
					<defs>
						<linearGradient
							id="paint0_linear"
							x1="105.66"
							y1="-108.819"
							x2="342.533"
							y2="169.972"
							gradientUnits="userSpaceOnUse"
						>
							<stop stopColor="#1B21DD" />
							<stop offset="1" stopColor="#24348C" />
						</linearGradient>
					</defs>
				</svg>
			</LogoWrapper>
		);
	}
}

const LogoWrapper = styled.div`
	height: 100%;
	width: 100%;
	position: fixed;
	top: 0;
	left: 0;
	display: flex;
	align-items: center;
	justify-content: center;
	background: #fff8f0;
	z-index: 9999;
	svg {
		width: 100px;
		height: 100px;
		animation-iteration-count: infinite;
		animation-duration: 1s;
		animation-direction: alternate;
	}
`;

export default LogoPrimary;
