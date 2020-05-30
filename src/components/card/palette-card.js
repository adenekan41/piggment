import React, { useState } from 'react';
import CodeSnippnets from 'components/snippet';
import PropTypes from 'prop-types';

import ModalPalette from 'components/modal/palette';
import {
	setState,
	getState,
} from 'codewonders-helpers/bundle-cjs/helpers/localstorage';
import history from 'utils/history';
import { BorderWrap, PaletteCardWrapper } from './style';

import { ReactComponent as Love } from '../../assets/icons/icon-love.svg';
import { ReactComponent as Eye } from '../../assets/icons/icon-eye.svg';
import { ReactComponent as Code } from '../../assets/icons/icon-code.svg';
import { ReactComponent as Delete } from '../../assets/icons/icon-delete.svg';
import { ReactComponent as ArrowRight } from '../../assets/icons/icon-right.svg';

const PaletteCard = ({
	children,
	copyText,
	data,
	loved,
	saveGradient,
	layout,
	cardMode = 'card',
	mode,
}) => {
	const [viewCode, setViewCode] = useState(false);
	const [show, setShow] = useState(false);

	const deleteGradient = (datas) => {
		setState(
			'SAVED_PALETTE',
			getState('SAVED_PALETTE').filter((item) => item.id !== datas.id)
		);
		history.go();
	};
	return (
		<>
			<PaletteCardWrapper
				className="card"
				layout={layout}
				cardMode={cardMode}
				color={{
					one: data.start,
					two: data.end,
				}}
			>
				{children}
				{viewCode && (
					<CodeSnippnets
						data={data}
						setViewCode={setViewCode}
						copyText={copyText}
						palette
					/>
				)}
				{cardMode === 'card' ? (
					<>
						<div className="card-body">
							<div onClick={() => setShow(!show)}>
								<div className="d-flex bordered">
									{data.colors.map((color, index) => (
										<figure
											key={index * Date.now()}
											style={{
												background: color,
											}}
										>
											<span>{color}</span>
										</figure>
									))}
								</div>

								<article>
									<h4>{data.name}</h4>
									<p className="hex__section">
										<span>{data.start}</span> <ArrowRight />{' '}
										<span>{data.end}</span>
									</p>
								</article>
							</div>
							<div
								className="small__colors"
								style={{
									background: data.start,
								}}
							/>
							<div
								className="small__colors"
								style={{
									background: data.end,
								}}
							/>

							<BorderWrap className="float-right border-wrap">
								<button
									onClick={() => {
										setViewCode(true);
										copyText();
									}}
									type="button"
									className="none-button"
								>
									<Code tabIndex="-1" />
								</button>
								<button
									onClick={() => {
										setShow(true);
									}}
									type="button"
									className="none-button ml-2"
								>
									<Eye />
								</button>

								{mode !== 'delete' && (
									<button
										onClick={() => saveGradient(data)}
										type="button"
										className="none-button ml-2"
									>
										<Love
											tabIndex="-1"
											className={`${loved && 'active_love'}`}
										/>
									</button>
								)}
								{mode === 'delete' && (
									<button
										onClick={() => deleteGradient(data)}
										type="button"
										className="none-button ml-2"
									>
										<Delete tabIndex="-1" />
									</button>
								)}
							</BorderWrap>
						</div>
					</>
				) : (
					<>
						<div className="d-flex bordered">
							{data.colors.map((color, index) => (
								<figure
									key={index * Date.now()}
									style={{
										background: color,
									}}
								>
									<span>{color}</span>
								</figure>
							))}
						</div>
						<div className="write__up">
							<article>
								<h4>{data.name}</h4>
								<p>By Piggment Gradients</p>
							</article>

							<BorderWrap className="float-right border-wrap">
								<button
									onClick={() => {
										setViewCode(true);
										copyText();
									}}
									type="button"
									className="none-button"
								>
									<Code tabIndex="-1" />
								</button>
								<button
									onClick={() => {
										setShow(true);
									}}
									type="button"
									className="none-button ml-2"
								>
									<Eye />
								</button>

								<button
									onClick={() => saveGradient(data)}
									type="button"
									className="none-button ml-2"
								>
									<Love tabIndex="-1" className={`${loved && 'active_love'}`} />
								</button>
							</BorderWrap>
						</div>
					</>
				)}
				{show && (
					<ModalPalette
						show={show}
						data={data}
						setShow={() => setShow(false)}
					/>
				)}
			</PaletteCardWrapper>
		</>
	);
};

PaletteCard.propTypes = {
	children: PropTypes.oneOfType([PropTypes.node, PropTypes.element]),
	copyText: PropTypes.func,
	data: PropTypes.object,
	loved: PropTypes.bool,
	saveGradient: PropTypes.func,
	layout: PropTypes.bool,
	cardMode: PropTypes.string,
};

export default PaletteCard;
