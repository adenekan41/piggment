import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

import useAddToHomeScreen from './use-add-tohomescreen';

const AddToHomeScreen = () => {
	const [prompt, promptToInstall] = useAddToHomeScreen();
	const [isVisible, setVisibleState] = useState(false);

	const hide = () => setVisibleState(false);
	useEffect(() => {
		if (prompt) {
			setVisibleState(true);
		}
	}, [prompt]);

	if (!isVisible) {
		return <div />;
	}
	return (
		<AddToHomeScreenWrapper onClick={hide}>
			Experience More Inspiring Gradients Offline?
			<button onClick={hide} className="none-button ml-2" type="button">
				Close
			</button>
			<button
				onClick={promptToInstall}
				className="btn btn-piggment ml-3"
				type="button"
			>
				Install
			</button>
		</AddToHomeScreenWrapper>
	);
};

const AddToHomeScreenWrapper = styled.div`
	position: fixed;
	bottom: 21px;
	background: #fef8f0;
	z-index: 9999;
	left: 50%;
	box-shadow: 0 2px 14px #00000040;
	transform: translate(-50%, 0px);
	padding: 10px 15px;
	border-radius: 6px;
	color: var(--black);
	font-size: var(--font-sm);
	display: flex;
	align-items: center;
	.none-button {
		font-size: 14px;
		text-decoration: underline;
		color: var(--accent);
	}
	@media (max-width: 787px) {
		display: none;
	}
`;
export default AddToHomeScreen;
