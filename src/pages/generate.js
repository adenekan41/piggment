import React, { useContext, useEffect, useCallback, useState } from 'react';
import { GradientContext } from 'context';
import styled from 'styled-components';
import Card from 'components/card';
import { Link } from 'react-router-dom';

import { ReactComponent as Logo } from '../assets/icons/logo_.svg';

const Generate = () => {
	const { state, loadGradients } = useContext(GradientContext);
	const [index, setIndex] = useState(0);

	const handleSpaceBar = useCallback(
		async (e) => {
			if (e.keyCode === 32) {
				e.preventDefault();

				await loadGradients(1);
				setIndex(index + 1);
			} else if (e.keyCode === 39) {
				e.preventDefault();

				await loadGradients(1);
				setIndex(index + 1);
			} else if (e.keyCode === 37) {
				e.preventDefault();

				if (index > 0) {
					setIndex(index - 1);
				}
			}
		},
		[index, loadGradients]
	);

	useEffect(() => {
		if (state.length < 1) {
			loadGradients(1);
		}
	}, [loadGradients, state]);

	useEffect(
		function setupListener() {
			window.addEventListener('keydown', handleSpaceBar);

			return function cleanupListener() {
				window.removeEventListener('keydown', handleSpaceBar);
			};
		},
		[handleSpaceBar]
	);

	return (
		<GenerateWrapper>
			<header>
				<Link to="/">
					<Logo />
				</Link>
				<h3>Generate gradient.</h3>
				<div className="buttons">
					<Link to="/explore" className="mr-md-3">
						Explore
					</Link>
					<Link to="/saved">Saved </Link>
				</div>
			</header>
			{state.length > 0 && (
				<Card
					data={state && state[index]}
					type="generate"
					next={async () => {
						await loadGradients(1);
						setIndex(index + 1);
					}}
					prev={() => index > 0 && setIndex(index - 1)}
				/>
			)}
		</GenerateWrapper>
	);
};
const GenerateWrapper = styled.main`
	header {
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		z-index: 99;
		display: flex;
		justify-content: space-between;
		padding: 14px 25px;
		background: #fff8f0;
		align-items: center;
		svg {
			height: 20px;
			width: auto;
		}
		h3 {
			font-weight: 900;
			font-size: 1.42em;
			color: var(--black);
			margin: 0;
			letter-spacing: -1.3px;
		}
		.buttons {
			a {
				font-size: 14px;
				color: var(--accent);
			}
		}
	}
	height: 100vh;
	width: 100vw;
`;
export default Generate;
