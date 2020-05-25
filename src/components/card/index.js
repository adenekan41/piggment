/* eslint-disable react/jsx-curly-brace-presence */
import React, { useRef, useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import { rgbToHex } from 'utils';
import { setState, getState } from 'codewonders-helpers';
import history from 'utils/history';

import ModalLayout from '../modal/index';

import { ReactComponent as Love } from '../../assets/icons/icon-love.svg';
import { ReactComponent as Delete } from '../../assets/icons/icon-delete.svg';
import { ReactComponent as Code } from '../../assets/icons/icon-code.svg';
import { ReactComponent as Save } from '../../assets/icons/icon-save.svg';
import { ReactComponent as ArrowRight } from '../../assets/icons/icon-right.svg';
import { ReactComponent as Close } from '../../assets/icons/icon-close.svg';
import {
	CardWrapper,
	BorderWrap,
	LargeCardWrapper,
	GenerateWrapper,
	Snippet,
} from './style';

const Card = React.memo(
	({
		data,
		mode,
		layout,
		type = 'small',
		next = () => {},
		prev = () => {},
	}) => {
		const textCanvas = useRef(null);
		const [url, setUrl] = useState('');
		const [show, setShow] = useState(false);
		const [viewCode, setViewCode] = useState(false);
		const [loved, setLoved] = useState(false);

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

			// console.log(dataAngle);
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

		return (
			<>
				{type === 'small' ? (
					<CardWrapper
						className="card"
						layout={layout}
						color={{
							one: rgbToHex(data.color, 1),
							two: rgbToHex(data.color, 0),
						}}
					>
						<canvas
							ref={textCanvas}
							width="1360"
							height="768"
							style={{ display: 'none' }}
						/>
						{viewCode && (
							<CodeSnippnets
								data={data}
								setViewCode={setViewCode}
								copyText={copyText}
							/>
						)}
						<div className="card-body">
							<div onClick={() => setShow(!show)}>
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
							</div>
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
								<a
									download={`Pigment-${data.name}`}
									href={url}
									title={data.name}
								>
									<Save />
								</a>
								{mode !== 'delete' && (
									<Love
										onClick={() => saveGradient(data)}
										className={`${loved && 'active_love'} ml-2`}
									/>
								)}
								{mode === 'delete' && (
									<Delete
										onClick={() => deleteGradient(data)}
										className="ml-2"
									/>
								)}
							</BorderWrap>
						</div>
						{show && (
							<ModalLayout
								show={show}
								data={data}
								setShow={() => setShow(false)}
							/>
						)}
					</CardWrapper>
				) : type === 'large' ? (
					<LargeCardWrapper
						style={{
							background: data.color,
						}}
						className="large__sum-card"
					>
						<canvas
							ref={textCanvas}
							width="1360"
							height="768"
							style={{ display: 'none' }}
						/>
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
								<a
									download={`Pigment-${data.name}`}
									href={url}
									title={data.name}
								>
									<Save />
								</a>

								<Love
									onClick={() => saveGradient(data)}
									className={`${loved && 'active_love'} ml-2`}
								/>
							</BorderWrap>
						</div>
					</LargeCardWrapper>
				) : (
					<GenerateWrapper
						style={{
							background: data.color,
						}}
						color={{
							one: rgbToHex(data.color, 1),
							two: rgbToHex(data.color, 0),
						}}
						className="fadeIn"
					>
						<canvas
							ref={textCanvas}
							width="1360"
							height="768"
							style={{ display: 'none' }}
						/>
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
								<p className="hex__section">
									<span>{rgbToHex(data.color, 1)}</span> <ArrowRight />{' '}
									<span>{rgbToHex(data.color, 0)}</span>
								</p>{' '}
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
							</article>

							<div className="control__panel">
								<h6>Tap space bar to generate new gradients</h6>
								<div className="d-flex justify-content-between">
									<span onClick={prev}>
										<ArrowRight style={{ transform: 'rotate(180deg)' }} />{' '}
										Previous
									</span>
									<span onClick={next}>
										Next <ArrowRight />
									</span>
								</div>
							</div>

							<BorderWrap className="float-right border-wrap">
								<Code
									className="mr-2"
									onClick={() => {
										setViewCode(true);
										copyText();
									}}
								/>
								<a
									download={`Pigment-${data.name}`}
									href={url}
									title={data.name}
								>
									<Save />
								</a>

								<Love
									onClick={() => saveGradient(data)}
									className={`${loved && 'active_love'} ml-2`}
								/>
							</BorderWrap>
						</div>
					</GenerateWrapper>
				)}
			</>
		);
	}
);

/* -------------------------- Codesnippet component ------------------------- */

const CodeSnippnets = ({ copyText, setViewCode, data }) => {
	return (
		<Snippet className="snippet fadeIn">
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

/* ----------------------------- end codsnipped ----------------------------- */

Card.propTypes = {
	data: PropTypes.object,
	mode: PropTypes.string,
	layout: PropTypes.string,
	type: PropTypes.string,
	next: PropTypes.func,
	prev: PropTypes.func,
};

export default Card;
