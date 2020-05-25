import React, { useRef, useEffect, useState } from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';

import { rgbToHex } from 'utils';
import { setState, getState } from 'codewonders-helpers';
import history from 'utils/history';

import { ReactComponent as Love } from '../../assets/icons/icon-love.svg';
import { ReactComponent as Delete } from '../../assets/icons/icon-delete.svg';
import { ReactComponent as Code } from '../../assets/icons/icon-code.svg';
import { ReactComponent as Save } from '../../assets/icons/icon-save.svg';
import { ReactComponent as ArrowRight } from '../../assets/icons/icon-right.svg';
import { ReactComponent as Close } from '../../assets/icons/icon-close.svg';

const Card = React.memo(({ data, mode, layout, type = 'small' }) => {
	const textCanvas = useRef(null);
	const [url, setUrl] = useState('');
	const [viewCode, setViewCode] = useState(false);
	const [loved, setLoved] = useState(false);

	const copyText = () => {
		const textField = document.createElement('textarea');

		textField.innerText = `
    background: ${rgbToHex(data.color, 0)}; /* fallback for old browsers */ \n
    background: -webkit-${data.color}; /* Chrome 10-25, Safari 5.1-6 */ \n
    background: ${data.color}`;

		document.body.appendChild(textField);
		textField.select();
		document.execCommand('copy');
		textField.remove();
	};

	// Get and draw canvas URL
	useEffect(() => {
		const canvasObj = textCanvas.current;
		const ctx = canvasObj.getContext('2d');
		const dataAngle = data.color
			.split('deg')
			.shift()
			.replace(/\/$/, '')
			.split('(')
			.pop();
		const angle = (dataAngle * Math.PI) / 360;
		const x2 = Math.cos(angle) * canvasObj.width;
		const y2 = Math.sin(angle) * canvasObj.height;

		const grd = ctx.createLinearGradient(0, 0, x2, y2);
		// light blue

		grd.addColorStop(
			parseInt(
				data.color
					.split('rgb')
					.slice(1)
					.join('')
					.split(' ')

					.filter((fl) => fl.includes('%'))[0],
				10
			) / 100,
			rgbToHex(data.color, 0)
		);
		grd.addColorStop(
			parseInt(
				data.color
					.split('rgb')
					.slice(1)
					.join('')
					.split(' ')

					.filter((fl) => fl.includes('%'))[1],
				10
			) / 100,
			rgbToHex(data.color, 1)
		);
		ctx.fillStyle = grd;
		ctx.fillRect(0, 0, canvasObj.width, canvasObj.height);
		setUrl(ctx.canvas.toDataURL());
	}, [data]);

	const saveGradient = (datas) => {
		if (!getState('SAVED')) {
			setState('SAVED', []);
		}
		setState('SAVED', [...getState('SAVED'), datas]);
		setLoved(true);
	};

	const deleteGradient = (datas) => {
		setState(
			'SAVED',
			getState('SAVED').filter((item) => item.id !== datas.id)
		);
		history.go();
	};

	return (
		<>
			<canvas
				ref={textCanvas}
				width="1360"
				height="768"
				style={{ display: 'none' }}
			/>
			{type === 'small' ? (
				<CardWrapper
					className="card"
					layout={layout}
					color={{ one: rgbToHex(data.color, 1), two: rgbToHex(data.color, 0) }}
				>
					{viewCode && (
						<CodeSnippnets
							data={data}
							setViewCode={setViewCode}
							copyText={copyText}
						/>
					)}

					<div className="card-body">
						<figure
							style={{
								background: data.color,
							}}
						/>
						<article>
							<h4>{data.name}</h4>
							<p className="hex__section">
								<span>{rgbToHex(data.color, 1)}</span> <ArrowRight />{' '}
								<span>{rgbToHex(data.color, 0)}</span>
							</p>
						</article>
						<div
							className="small__colors"
							style={{
								background: `${rgbToHex(data.color, 1)}`,
							}}
						/>
						<div
							className="small__colors"
							style={{
								background: `${rgbToHex(data.color, 0)}`,
							}}
						/>
						<BorderWrap className="float-right border-wrap">
							<Code
								className="mr-2"
								onClick={() => {
									setViewCode(true);
									copyText();
								}}
							/>
							<a download={`Pigment-${data.name}`} href={url} title={data.name}>
								<Save />
							</a>
							{mode !== 'delete' && (
								<Love
									onClick={() => saveGradient(data)}
									className={`${loved && 'active_love'} ml-2`}
								/>
							)}
							{mode === 'delete' && (
								<Delete onClick={() => deleteGradient(data)} className="ml-2" />
							)}
						</BorderWrap>
					</div>
				</CardWrapper>
			) : (
				<LargeCardWrapper
					style={{
						background: data.color,
					}}
				>
					{viewCode && (
						<CodeSnippnets
							data={data}
							setViewCode={setViewCode}
							copyText={copyText}
						/>
					)}

					<div className="write__up">
						<article>
							<h4>{data.name}</h4>
							<p>By Pigment Gradients</p>
						</article>
						<BorderWrap className="float-right border-wrap">
							<Code
								className="mr-2"
								onClick={() => {
									setViewCode(true);
									copyText();
								}}
							/>
							<a download={`Pigment-${data.name}`} href={url} title={data.name}>
								<Save />
							</a>

							<Love
								onClick={() => saveGradient(data)}
								className={`${loved && 'active_love'} ml-2`}
							/>
						</BorderWrap>
					</div>
				</LargeCardWrapper>
			)}
		</>
	);
});

/* -------------------------- Codesnippet component ------------------------- */

const CodeSnippnets = ({ copyText, setViewCode, data }) => {
	return (
		<Snippet>
			<div className="css_code">
				<Close className="ml-auto d-block" onClick={() => setViewCode(false)} />
				<h4>CSS Code.</h4>
				<article>
					<code>
						<dd>background: {rgbToHex(data.color, 0)};</dd>{' '}
						{'/* fallback for old browsers */'}
					</code>
					<code>
						<dd>background: -webkit-{data.color};</dd>
						{'/* Chrome 10-25, Safari 5.1-6 */'}
					</code>
					<code>
						<dd>background: {data.color};</dd>
					</code>
				</article>
				<button
					className="btn btn-pigment"
					onClick={() => copyText()}
					type="button"
				>
					Copy To Clipboard
				</button>
			</div>
		</Snippet>
	);
};

CodeSnippnets.propTypes = {
	copyText: PropTypes.func,
	setViewCode: PropTypes.func,
	data: PropTypes.object,
};

const Snippet = styled.div`
	background: #fffffff2;
	position: absolute;
	height: 100%;
	z-index: 99;
	width: 100%;
	max-height: 100%;
	overflow: overlay;
	animation: loadUp;
	animation-fill-mode: both;
	animation-duration: 0.5s;

	padding: 24px;
	article {
		text-align: left !important;
	}
	h4 {
		font-size: 15px;
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
		width: 20px;
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

	@keyframes loadUp {
		0% {
			opacity: 0;
		}

		to {
			opacity: 1;
		}
	}
`;
/* ----------------------------- end codsnipped ----------------------------- */

export const BorderWrap = styled.div`
	border: 1px solid #e4e4e4;
	padding: 1px 7px;
	margin: 0;
	border-radius: 50px;
	svg {
		cursor: pointer;
		transition: all 0.3s ease;
		&:nth-child(3) {
			&.active_love {
				fill: #e83630;
			}
			&:hover {
				fill: #e83630;
				transform: scale(1.14);
			}
		}
		&:nth-child(2) {
			&:hover {
				fill: var(--theme-primary);
				transform: scale(1.14);
			}
		}
		&:nth-child(1) {
			&:hover {
				fill: var(--accent);
				transform: scale(1.14);
			}
		}
	}
`;

const CardWrapper = styled.div`
	border: none !important;
	box-shadow: 0 2px 15px #0d14420d;
	cursor: pointer;
	transition: all 0.4s ease;
	figure {
		min-height: 230px;
		border-radius: 8px;
		transition: all 0.4s ease;
		${(props) =>
			props.layout &&
			css`
				height: 230px;
				width: 230px;
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
	article {
		${(props) =>
			props.layout &&
			css`
				text-align: center;
			`}
		h4 {
			text-transform: capitalize;
			font-size: 1.15em;
			font-weight: 500;

			color: #0a0a0a;
			white-space: nowrap;
		}
		p {
			font-size: 12px;
			white-space: nowrap;
			color: #989898;
		}
	}

	svg {
		width: 15px;
		fill: #717171;
	}
	.card-body {
		padding: 13px;
	}
`;

const LargeCardWrapper = styled.div`
	height: 400px;
	width: 100%;
	position: absolute;

	top: 27rem;
	border-radius: 7px;
	.css_code {
		article {
			text-align: center !important;
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
			font-size: 17px;
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
			width: 17px;
			fill: #dedede;
		}
	}
`;

Card.propTypes = {
	data: PropTypes.object,
	mode: PropTypes.string,
	layout: PropTypes.string,
	type: PropTypes.string,
};

export default Card;
