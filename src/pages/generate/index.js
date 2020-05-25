import React, { useContext, useEffect, useCallback } from 'react';
import { GradientContext } from 'context';
import styled from 'styled-components';
import Card from 'components/card';

const Generate = () => {
	const { state, loadGradients, clearGradient } = useContext(GradientContext);

	const handleSpaceBar = useCallback(
		(e) => {
			e.preventDefault();
			if (e.keyCode === 32) {
				// Space

				clearGradient();
			} else if (e.keyCode === 39) {
				// ->

				clearGradient();
			} else if (e.keyCode === 37) {
				// <-
				// if (index > 0) {
				// 	// loadGradients(1)
				// }
			}
		},
		[clearGradient]
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

	console.log(state);

	return (
		<GenerateWrapper>
			{state.length > 0 && <Card data={state && state[0]} type="generate" />}
		</GenerateWrapper>
	);
};
const GenerateWrapper = styled.main`
	header {
		height: 8em;
		display: flex;
		align-items: flex-end;
		justify-content: center;
	}
	height: 100vh;
	width: 100vw;
`;
export default Generate;
