/* -------------------------------------------------------------------------- */
/*                            External Dependencies                           */
/* -------------------------------------------------------------------------- */
import React, { useState, memo } from 'react';
import PropTypes from 'prop-types';
import {
	setState,
	getState,
} from 'codewonders-helpers/bundle-cjs/helpers/localstorage';
import { OverlayTrigger, Tooltip } from 'react-bootstrap';

/* -------------------------- Internal Dependencies ------------------------- */
import ModalPalette from 'components/modal/palette';
import CodeSnippnets from 'components/snippet';
import history from 'utils/history';
import PureComponent from 'components/pure-component-wrapper';
import ShareDropdown from './share-dropdown';

/* ---------------------------- Style Dependency ---------------------------- */
import { BorderWrap, PaletteCardWrapper } from './style';

/* --------------------------- Image Depenedencies --------------------------- */
import { ReactComponent as Love } from '../../assets/icons/icon-love.svg';
import { ReactComponent as Eye } from '../../assets/icons/icon-eye.svg';
import { ReactComponent as Code } from '../../assets/icons/icon-code.svg';
import { ReactComponent as Delete } from '../../assets/icons/icon-delete.svg';
import { ReactComponent as ArrowRight } from '../../assets/icons/icon-right.svg';

/* -------------------------- PaletteCard PropTypes ------------------------- */
const propTypes = {
	children: PropTypes.oneOfType([PropTypes.node, PropTypes.element]),
	copyText: PropTypes.func,
	data: PropTypes.object,
	loved: PropTypes.bool,
	saveGradient: PropTypes.func,
	layout: PropTypes.string,
	mode: PropTypes.string,
	cardMode: PropTypes.string,
};

const PaletteCard = memo(
	({
		children,
		copyText,
		data,
		loved,
		saveGradient,
		layout,
		cardMode = 'card',
		mode,
	}) => {
		/* ------------------------------- PURE SVG's ------------------------------- */
		const PureLove = PureComponent(Love);
		const PureCode = PureComponent(Code);
		const PureEye = PureComponent(Eye);
		const PureDelete = PureComponent(Delete);
		const PureArrowRight = PureComponent(ArrowRight);
		/* ----------------------------- END PURE SVG's ----------------------------- */

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
											<span>{data.start}</span>{' '}
											<PureArrowRight aria-hidden="true" focusable="false" />{' '}
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
										aria-label="Show CSS Code"
									>
										<PureCode
											tabIndex="-1"
											aria-hidden="true"
											focusable="false"
										/>
									</button>

									<button
										onClick={() => {
											setShow(true);
										}}
										type="button"
										className="none-button ml-2"
										aria-label="View Palette"
									>
										<PureEye aria-hidden="true" focusable="false" />
									</button>

									{mode !== 'delete' && (
										<button
											onClick={() => saveGradient(data)}
											type="button"
											className="none-button ml-2"
											aria-label="Save Palette"
										>
											<PureLove
												tabIndex="-1"
												className={`${loved && 'active_love'}`}
												aria-hidden="true"
												focusable="false"
											/>
										</button>
									)}
									{mode === 'delete' && (
										<button
											onClick={() => deleteGradient(data)}
											type="button"
											className="none-button ml-2"
											aria-label="Delete Palette"
										>
											<PureDelete
												tabIndex="-1"
												aria-hidden="true"
												focusable="false"
											/>
										</button>
									)}
									<ShareDropdown palette data={data} />
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
									<OverlayTrigger
										overlay={<Tooltip id="tooltip-disabled">CSS Code</Tooltip>}
									>
										<button
											onClick={() => {
												setViewCode(true);
												copyText();
											}}
											type="button"
											className="none-button"
											aria-label="Show CSS Code"
										>
											<PureCode
												tabIndex="-1"
												aria-hidden="true"
												focusable="false"
											/>
										</button>
									</OverlayTrigger>
									<OverlayTrigger
										overlay={<Tooltip id="tooltip-disabled">Preview</Tooltip>}
									>
										<button
											onClick={() => {
												setShow(true);
											}}
											type="button"
											className="none-button ml-2"
											aria-label="View Palette"
										>
											<PureEye aria-hidden="true" focusable="false" />
										</button>
									</OverlayTrigger>
									<OverlayTrigger
										overlay={<Tooltip id="tooltip-disabled">Save</Tooltip>}
									>
										<button
											onClick={() => saveGradient(data)}
											type="button"
											className="none-button ml-2"
											aria-label="Save Palette"
										>
											<PureLove
												tabIndex="-1"
												className={`${loved && 'active_love'}`}
												aria-hidden="true"
												focusable="false"
											/>
										</button>
									</OverlayTrigger>
									<ShareDropdown palette data={data} />
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
	}
);

PaletteCard.propTypes = propTypes;
export default PaletteCard;
