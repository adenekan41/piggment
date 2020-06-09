/* -------------------------------------------------------------------------- */
/*                            External Dependencies                           */
/* -------------------------------------------------------------------------- */
import React, { useState, memo } from 'react';
import CodeSnippnets from 'components/snippet';
import PropTypes from 'prop-types';

/* --------------------------- Internal Depencies --------------------------- */
import ModalPalette from 'components/modal/palette';
import PureComponent from 'components/pure-component-wrapper';
import { BorderWrap, GenerateWrapper } from './style';
import ShareDropdown from './share-dropdown';

/* ---------------------------- Image Dependecies --------------------------- */
import { ReactComponent as Love } from '../../assets/icons/icon-love.svg';
import { ReactComponent as Code } from '../../assets/icons/icon-code.svg';
import { ReactComponent as ArrowRight } from '../../assets/icons/icon-right.svg';
import { ReactComponent as Eye } from '../../assets/icons/icon-eye.svg';

/* --------------------- GeneratorPaletteCard PropTypes --------------------- */
const propTypes = {
	copyText: PropTypes.func,
	data: PropTypes.object,
	loved: PropTypes.bool,
	next: PropTypes.func,
	prev: PropTypes.func,
	saveGradient: PropTypes.func,
};

const GeneratorPaletteCard = memo(
	({ copyText, data, loved, saveGradient, next, prev }) => {
		/* ------------------------------- PURE SVG's ------------------------------- */
		const PureLove = PureComponent(Love);
		const PureCode = PureComponent(Code);
		const PureArrowRight = PureComponent(ArrowRight);
		const PureEye = PureComponent(Eye);
		/* ----------------------------- END PURE SVG's ----------------------------- */

		const [viewCode, setViewCode] = useState(false);
		const [show, setShow] = useState(false);
		return (
			<>
				<GenerateWrapper
					color={{
						one: data.start,
						two: data.end,
					}}
					className="fadeIn"
				>
					{viewCode && (
						<CodeSnippnets
							data={data}
							setViewCode={setViewCode}
							copyText={copyText}
							palette
						/>
					)}
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
							<p className="hex__section">
								<span>{data.start}</span>{' '}
								<PureArrowRight aria-hidden="true" focusable="false" />{' '}
								<span>{data.end}</span>
							</p>{' '}
							<div
								className="small__colors"
								style={{
									background: `${data.start}`,
								}}
							/>
							<div
								className="small__colors"
								style={{
									background: `${data.end}`,
								}}
							/>
						</article>

						<div className="control__panel w-md-auto">
							<h6 className="d-none d-md-block">
								Tap space bar to generate new gradient palettes
							</h6>
							<div className="d-flex justify-content-between">
								<button
									type="button"
									className="none-button"
									onClick={prev}
									aria-label="Previous"
								>
									<PureArrowRight
										aria-hidden="true"
										style={{ transform: 'rotate(180deg)' }}
										focusable="false"
									/>{' '}
									Previous
								</button>
								<button
									type="button"
									className="none-button"
									onClick={next}
									aria-label="Next"
								>
									Next <PureArrowRight aria-hidden="true" focusable="false" />
								</button>
							</div>
						</div>

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
								<PureCode tabIndex="-1" aria-hidden="true" focusable="false" />
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
							<ShareDropdown palette data={data} />
						</BorderWrap>
					</div>
					{show && (
						<ModalPalette
							show={show}
							data={data}
							setShow={() => setShow(false)}
						/>
					)}
				</GenerateWrapper>
			</>
		);
	}
);

GeneratorPaletteCard.propTypes = propTypes;

export default GeneratorPaletteCard;
