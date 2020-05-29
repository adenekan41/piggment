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
	mode = 'card',
}) => {
	const [viewCode, setViewCode] = useState(false);
	const [show, setShow] = useState(false);

	const deleteGradient = (datas) => {
		setState(
			'SAVED',
			getState('SAVED').filter((item) => item.id !== datas.id)
		);
		history.go();
	};
	return (
		<>
			<PaletteCardWrapper
				className="card"
				layout={layout}
				mode={mode}
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
				{mode === 'card' ? (
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
								<Code
									className=""
									onClick={() => {
										setViewCode(true);
										copyText();
									}}
								/>

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
							<ModalPalette
								show={show}
								data={data}
								setShow={() => setShow(false)}
							/>
						)}
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

								<Love
									onClick={() => saveGradient(data)}
									className={`${loved && 'active_love'} ml-2`}
								/>
							</BorderWrap>
						</div>
					</>
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
	mode: PropTypes.string,
};

export default PaletteCard;
