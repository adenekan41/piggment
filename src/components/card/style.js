import styled, { css } from 'styled-components';

const figure = css`
	width: 100%;
	margin: 0;
	display: flex;
	align-items: flex-end;
	flex-grow: 1;
	transition: all 0.1s ease-in-out;
	cursor: pointer;
	position: relative;
	overflow: hidden;
	flex-basis: 1px;
	justify-content: center;
	transition: all 500ms ease-in-out;
	span {
		visibility: hidden;
		height: 0;
		font-size: 0px;
		transition: all 300ms ease;
	}
	&:hover {
		color: var(--black);
		flex-basis: 3rem;
		span {
			background: #00000042;
			display: flex;
			align-items: center;
			width: 100%;
			visibility: visible;
			font-size: 15px;
			font-weight: 500;
			justify-content: center;
			color: #fff;
			text-align: center;
			padding: 10px;
			height: 100%;
		}
	}
`;
export const Snippet = styled.div`
	background: #fffffff2;
	position: absolute;
	height: 100%;
	z-index: 99;
	width: 100%;
	max-height: 100%;
	overflow: overlay;

	padding: 24px;
	article {
		text-align: left;
	}
	h4 {
		font-size: var(--font-sm);
		font-weight: 600;
		color: var(--black);
		letter-spacing: -0.5px;
		margin-bottom: 1rem;
	}
	dd {
		color: var(--black);
		margin-bottom: 2px;
	}
	svg {
		width: var(--font-md);
	}
	code {
		font-size: 12px;
		color: #a9a9a9;
		display: block;

		margin-bottom: 15px;
	}
	button {
		font-size: 13px;
		margin-top: 5px;
		padding: 6px 14px;
	}
`;
/* ----------------------------- end codsnipped ----------------------------- */

export const BorderWrap = styled.div`
	border: 1px solid #efefef;
	padding: 2px 4px 2px 7px;
	margin: 0;
	border-radius: 50px;
	display: flex;
	align-items: center;
	justify-content: center;

	.dropdown-menu.show {
		font-size: calc(var(--font-sm) - 1px);
		border: none;
		box-shadow: 0 2px 15px #00000030;
		background: #fff8f0;

		a {
			color: var(--black);
			padding: 6px 16px;
			font-weight: 100 !important;
		}
	}
	.share__button {
		svg.dropdown-toggle {
			transition: all 0.3s ease;
			background: #e2e2e2ad;
			border-radius: 50px;
			width: 1.238em;

			height: 1.238em;
			padding: 0.28em;
			display: block;
			&:hover {
				fill: var(--black) !important;
				transform: scale(1.14);
			}
		}
	}
	button,
	a {
		cursor: pointer;
		height: auto;
		width: auto;
		display: flex;
		svg {
			transition: all 0.3s ease;
			width: calc(var(--font-sm) + -1px);
			height: calc(var(--font-sm) + -1px);
			&.active_love {
				fill: #e83630 !important;
			}
		}

		&:nth-child(3) {
			svg {
				&:hover {
					fill: #e83630 !important;
					transform: scale(1.14);
				}
			}
		}
		&:nth-child(2) {
			svg {
				&:hover {
					fill: var(--theme-primary) !important;
					transform: scale(1.14);
				}
			}
		}
		&:nth-child(1) {
			svg {
				&:hover {
					fill: var(--accent) !important;
					transform: scale(1.14);
				}
			}
		}
	}
`;

export const GenerateWrapper = styled.div`
	height: 100vh;
	width: 100%;

	.css_code {
		article {
			text-align: center;
		}
	}
	.bordered {
		border-radius: 1px;
		overflow: hidden;
		margin-bottom: 1rem;
		flex-direction: row-reverse;
		transition: all 0.4s ease;
		margin: 0;
		width: 100%;
		height: 100%;
		figure {
			${figure}
			span {
				&:hover {
					font-size: 1.5em;
				}
			}
		}
	}
	.small__colors {
		height: 18px;
		width: 18px;
		margin: 0 1.5px;
		border-radius: 50%;
		display: inline-block;
		transition: all 0.4s ease;
		&:hover {
			transform: scale(1.14);
		}
	}
	.control__panel {
		span {
			font-size: var(--font-sm);
			color: #676767;
			cursor: pointer;

			&:hover {
				color: var(--accent);
				user-select: none;
			}
		}
		h6 {
			font-size: calc(var(--font-sm) + 1.1px);
			font-weight: 600;
			letter-spacing: -0.4px;
			margin-bottom: 9px;
		}
	}

	.hex__section {
		span {
			transition: all 0.3s ease;
			&:first-child {
				&:hover {
					color: ${(props) => props.color.one};
				}
			}
			&:last-child {
				&:hover {
					color: ${(props) => props.color.two};
				}
			}
		}
	}
	.border-wrap {
		border: none;
	}
	.snippet {
		position: absolute;
		height: 350px;
		z-index: 99;
		width: 500px;
		top: 50%;

		left: 50%;
		transform: translate(-50%, -50%);
		article {
			text-align: left !important;
		}
		@media (max-width: 787px) {
			width: 98%;
		}
	}
	.write__up {
		padding: 0 30px;
		background: #fff8f0;
		border-radius: 6px;
		background-size: calc(20 * 0.5px) calc(20 * 0.5px);
		background-image: radial-gradient(#0a113e30 0.5px, transparent 0.5px);
		display: flex;
		width: 97.5%;
		position: fixed;
		bottom: 1rem;
		left: 50%;
		transform: translate(-50%, 0);
		align-items: center;
		justify-content: space-between;

		text-align: left;
		height: 110px;
		@media (max-width: 990px) {
			min-height: 264px;
			padding: 30px 24px;
			flex-direction: column;
			justify-content: space-between;
			align-items: flex-start;
		}
		h4 {
			font-size: 18px;
			text-transform: capitalize;
			font-weight: 500;
			color: var(--black);
			margin-bottom: 5px;
		}
		p {
			font-size: 13px;
			color: #8c8c8c;
			margin: 5px 0;
			svg {
				/* width: calc(var(--font-sm) + 1.1px); */
				height: auto;
				fill: #8c8c8c;
			}
		}
		svg {
			font-size: 1.45em;
			fill: #a7a7a7;
		}
	}
`;
export const LargeCardWrapper = styled.div`
	height: 400px;
	width: 100%;
	position: relative;

	border-radius: 7px;
	.css_code {
		article {
			text-align: left;
		}
	}

	&:before {
		content: '';
		position: absolute;

		height: 100%;
		width: 100%;
		background-size: calc(20 * 0.5px) calc(20 * 0.5px);
		background-image: radial-gradient(#0a113e30 0.5px, transparent 0.5px);
		left: 0;
		top: 0;
		border-radius: 0;
	}

	.write__up {
		padding: 0 25px;
		background: #0a113e30;
		border-radius: 6px;
		display: flex;
		width: 100%;
		align-items: center;
		justify-content: space-between;
		position: absolute;
		text-align: left;
		bottom: 0;
		left: 0;
		height: 80px;

		h4 {
			font-size: calc(var(--font-sm) + 1.1px);
			text-transform: capitalize;
			font-weight: 500;
			color: #ececec;
			margin-bottom: 0;
		}
		p {
			font-size: 13px;
			color: #dedede;
		}
		svg {
			/* width: calc(var(--font-sm) + 1.1px); */
			fill: #efefef;
		}
	}
`;

export const CardWrapper = styled.div`
	border: none !important;
	box-shadow: 0 2px 15px #0d14420d;
	cursor: pointer;
	transition: all 0.4s ease;
	figure {
		min-height: 13em;
		border-radius: 8px;
		transition: all 0.4s ease;
		${(props) =>
			props.layout &&
			css`
				height: 14em;
				min-height: 14em;
				width: 14em;
				border-radius: 50% !important;
				margin: 1rem auto;
			`}
	}

	&:hover {
		margin-top: -8px;
		figure {
			transform: scale(1.06);
		}
	}
	.hex__section {
		span {
			transition: all 0.3s ease;
			&:first-child {
				&:hover {
					color: ${(props) => props.color.one};
				}
			}
			&:last-child {
				&:hover {
					color: ${(props) => props.color.two};
				}
			}
		}
	}

	.small__colors {
		height: 1em;
		width: 1em;

		margin: 0 1.5px;
		border-radius: 50%;
		display: inline-block;
		transition: all 0.4s ease;
		&:hover {
			transform: scale(1.14);
		}
	}
	article {
		${(props) =>
			props.layout &&
			css`
				text-align: center;
			`}
		h4 {
			text-transform: capitalize;
			font-size: var(--font-md);
			font-weight: 500;

			color: #0a0a0a;
			white-space: nowrap;
		}
		p {
			font-size: 0.79em;
			white-space: nowrap;
			color: #989898;
		}
	}

	svg {
		width: 1.06em;
		fill: #9a9a9a;
	}
	.card-body {
		padding: 13px;
	}
`;

export const PaletteCardWrapper = styled.div`
	border: none !important;
	box-shadow: 0 2px 15px #0d14420d;
	cursor: pointer;
	transition: all 0.4s ease;

	figure {
		${figure}
		min-height: 11em;
		${(props) =>
			props.cardMode === 'large' &&
			css`
				min-height: 23em;
			`}

		${(props) =>
			props.layout &&
			css`
				min-height: 2.2em;
			`}
	}
	svg {
		width: 1.06em;
		fill: #717171;
	}
	.hex__section {
		span {
			transition: all 0.3s ease;
			&:first-child {
				&:hover {
					color: ${(props) => props.color.one};
				}
			}
			&:last-child {
				&:hover {
					color: ${(props) => props.color.two};
				}
			}
		}
	}

	article {
		${(props) =>
			props.layout &&
			css`
				text-align: center;
				margin-top: 2rem;
			`}
		h4 {
			text-transform: capitalize;
			font-size: var(--font-md);
			font-weight: 500;
			margin-bottom: 6px;
			color: #0a0a0a;
			white-space: nowrap;
		}
		p {
			font-size: 0.79em;
			white-space: nowrap;
			color: #989898;
			margin-bottom: 6px;
		}
	}
	.bordered {
		border-radius: 8px;
		overflow: hidden;
		margin-bottom: 1rem;
		flex-direction: row-reverse;
		transition: all 0.4s ease;

		${(props) =>
			props.layout &&
			css`
				flex-direction: column-reverse;
				width: 13.2em;
				height: 13.2em;
				border-radius: 50% !important;
				margin: auto;
			`}
		${(props) =>
			props.cardMode === 'large' &&
			css`
				margin: 0;
			`}
	}
	.card-body {
		padding: 13px;
	}
	.small__colors {
		height: 1em;
		width: 1em;

		margin: 0 1.5px;
		border-radius: 50%;
		display: inline-block;
		transition: all 0.4s ease;
		&:hover {
			transform: scale(1.14);
		}
	}
	.write__up {
		padding: 0 25px;
		background: #0a113e30;
		border-radius: 6px;
		display: flex;
		width: 100%;
		align-items: center;
		justify-content: space-between;
		position: absolute;
		text-align: left;
		bottom: 0;
		left: 0;
		height: 80px;

		h4 {
			font-size: calc(var(--font-sm) + 1.1px);
			text-transform: capitalize;
			font-weight: 500;
			color: #ececec;
			margin-bottom: 0;
		}
		p {
			font-size: 13px;
			color: #dedede;
		}
		svg {
			/* width: calc(var(--font-sm) + 1.1px); */
			fill: #dedede;
		}
	}
`;
