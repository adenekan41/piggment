/* -------------------------------------------------------------------------- */
/*                            External Dependencies                           */
/* -------------------------------------------------------------------------- */
import React, { useState, memo } from 'react';
import CodeSnippnets from 'components/snippet';
import PropTypes from 'prop-types';
import {
	setState,
	getState,
} from 'codewonders-helpers/bundle-cjs/helpers/localstorage';

/* -------------------------- Internal Dependencies ------------------------- */
import { rgbToHex } from 'utils';
import ModalLayout from 'components/modal';
import history from 'utils/history';
import PureComponent from 'components/pure-component-wrapper';
import { BorderWrap, CardWrapper } from './style';
import ShareDropdown from './share-dropdown';

/* --------------------------- Image Dependencies --------------------------- */
import { ReactComponent as Love } from '../../assets/icons/icon-love.svg';
import { ReactComponent as Code } from '../../assets/icons/icon-code.svg';
import { ReactComponent as Save } from '../../assets/icons/icon-save.svg';
import { ReactComponent as Delete } from '../../assets/icons/icon-delete.svg';
import { ReactComponent as ArrowRight } from '../../assets/icons/icon-right.svg';

/* --------------------------- SmallCard PropTypes -------------------------- */
const propTypes = {
	children: PropTypes.oneOfType([PropTypes.node, PropTypes.element]),
	copyText: PropTypes.func,
	data: PropTypes.object,
	loved: PropTypes.bool,
	saveGradient: PropTypes.func,
	url: PropTypes.string,
	layout: PropTypes.string,
	mode: PropTypes.string,
};

const SmallCard = memo(
	({ children, copyText, data, loved, saveGradient, url, layout, mode }) => {
		/* ------------------------------- PURE SVG's ------------------------------- */
		const PureLove = PureComponent(Love);
		const PureCode = PureComponent(Code);
		const PureSave = PureComponent(Save);
		const PureDelete = PureComponent(Delete);
		const PureArrowRight = PureComponent(ArrowRight);
		/* ----------------------------- END PURE SVG's ----------------------------- */

		const [viewCode, setViewCode] = useState(false);
		const [show, setShow] = useState(false);

		const deleteGradient = (datas) => {
			setState(
				'SAVED_GRADIENTS',
				getState('SAVED_GRADIENTS').filter((item) => item.id !== datas.id)
			);
			history.go();
		};
		return (
			<>
				<CardWrapper
					className="card"
					layout={layout}
					color={{
						one: rgbToHex(data.color, 1),
						two: rgbToHex(data.color, 0),
					}}
				>
					{children}
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
									<span>{rgbToHex(data.color, 1)}</span>
									<PureArrowRight aria-hidden="true" focusable="false" />
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
							<button
								onClick={() => {
									setViewCode(true);
								}}
								type="button"
								className="none-button"
								aria-label="Show CSS Code"
							>
								<PureCode tabIndex="-1" aria-hidden="true" />
							</button>

							<button type="button" className="none-button ml-2" tabIndex="-1">
								<a
									download={`Piggment-${data.name}`}
									href={url}
									title={data.name}
									tabIndex="0"
									aria-label="Download Gradient"
								>
									<PureSave
										tabIndex="-1"
										aria-hidden="true"
										focusable="false"
									/>
								</a>
							</button>

							{mode !== 'delete' && (
								<button
									onClick={() => saveGradient(data)}
									type="button"
									className="none-button ml-2"
									aria-label="Save Gradient"
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
									aria-label="Delete Gradient"
								>
									<PureDelete
										tabIndex="-1"
										aria-hidden="true"
										focusable="false"
									/>
								</button>
							)}
							<ShareDropdown data={data} save={() => saveGradient(data)} />
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
			</>
		);
	}
);

SmallCard.propTypes = propTypes;

export default SmallCard;
