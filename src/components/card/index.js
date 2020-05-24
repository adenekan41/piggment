import React, { useRef, useEffect, useState } from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';
import { rgbToHex } from 'utils';
import { ReactComponent as Love } from '../../assets/icons/icon-love.svg';
import { ReactComponent as Code } from '../../assets/icons/icon-code.svg';
import { ReactComponent as Save } from '../../assets/icons/icon-save.svg';
import { ReactComponent as ArrowRight } from '../../assets/icons/icon-right.svg';

const Card = ({ data, layout }) => {
	const textCanvas = useRef(null);
	const [url, setUrl] = useState('');

	useEffect(() => {
		const canvasObj = textCanvas.current;
		const ctx = canvasObj.getContext('2d');
		const grd = ctx.createLinearGradient(
			0,
			0,
			canvasObj.width,
			canvasObj.height
		);
		// light blue
		grd.addColorStop(0, rgbToHex(data.color, 0));
		// dark blue
		grd.addColorStop(1, rgbToHex(data.color, 1));
		ctx.fillStyle = grd;
		ctx.fillRect(0, 0, canvasObj.width, canvasObj.height);
		setUrl(ctx.canvas.toDataURL());
	}, [data]);
	return (
		<CardWrapper className="card" layout={layout}>
			<canvas
				ref={textCanvas}
				width="1360"
				height="768"
				style={{
					background: data.color,
					display: 'none',
				}}
			/>
			<div className="card-body">
				<figure
					style={{
						background: data.color,
					}}
				/>
				<article>
					<h4>{data.name}</h4>
					<p>
						<TextUI color={rgbToHex(data.color, 1)}>
							{rgbToHex(data.color, 1)}
						</TextUI>{' '}
						<ArrowRight />{' '}
						<TextUI color={rgbToHex(data.color, 0)}>
							{rgbToHex(data.color, 0)}
						</TextUI>
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
					<Code className="mr-2" />
					<a download={url} href={url} title={data.name}>
						<Save className="mr-2" />
					</a>
					<Love />
				</BorderWrap>
			</div>
		</CardWrapper>
	);
};

const TextUI = styled.span`
	transition: all 0.5s ease;
	&:hover {
		color: ${(props) => props.color};
	}
`;

export const BorderWrap = styled.div`
	border: 1px solid #e4e4e4;
	padding: 1px 7px;
	margin: 0;
	border-radius: 50px;
	svg {
		cursor: pointer;
		transition: all 0.3s ease;
		&:nth-child(3) {
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
	border: none !important;
	box-shadow: 0 2px 15px #0d14420d;
	cursor: pointer;
	transition: all 0.4s ease;
	&:hover {
		margin-top: -8px;
		figure {
			transform: scale(1.06);
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

Card.propTypes = {
	data: PropTypes.object,
	layout: PropTypes.string,
};

export default Card;
