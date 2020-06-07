import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const SkipToMain = ({ content = '0' }) => {
	return (
		<>
			<Wrapper
				className="skip-main fadeIn"
				href={`#${content}`}
				aria-label="Skip navigation and go to main content"
			>
				Skip to main content
			</Wrapper>
		</>
	);
};

const Wrapper = styled.a`
	left: -999px;
	position: fixed;
	top: auto;
	width: 1px;
	height: 1px;
	overflow: hidden;
	z-index: -999;

	&:focus,
	&:active {
		color: #fff;
		left: auto;
		background: linear-gradient(200deg, var(--theme-primary), var(--accent));
		top: auto;
		width: auto;
		height: auto;
		overflow: auto;
		padding: 6px 13px;
		border-radius: 1px 1px 5px 6px;
		border: 1px solid #5d68ca;
		text-align: center;
		font-size: 1.2em;
		font-weight: 500;
		font-size: calc(var(--font-x-sm) - 1px);
		z-index: 9999999;
	}
`;

SkipToMain.propTypes = {
	content: PropTypes.string,
};

export default SkipToMain;
