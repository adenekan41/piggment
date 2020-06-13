/* -------------------------------------------------------------------------- */
/*                            External Dependecies                            */
/* -------------------------------------------------------------------------- */
import React, { useState, memo } from 'react';
import CodeSnippnets from 'components/snippet';
import PropTypes from 'prop-types';
import { OverlayTrigger, Tooltip } from 'react-bootstrap';

/* -------------------------- Internal Dependecies -------------------------- */
import { rgbToHex } from 'utils';
import PureComponent from 'components/pure-component-wrapper';
import { BorderWrap, GenerateWrapper } from './style';
import ShareDropdown from './share-dropdown';

/* --------------------------- Image Dependencies --------------------------- */
import { ReactComponent as Love } from '../../assets/icons/icon-love.svg';
import { ReactComponent as Code } from '../../assets/icons/icon-code.svg';
import { ReactComponent as ArrowRight } from '../../assets/icons/icon-right.svg';
import { ReactComponent as Save } from '../../assets/icons/icon-save.svg';

/* ------------------------- GeneratorCard PropTypes ------------------------ */
const proptypes = {
	children: PropTypes.oneOfType([PropTypes.node, PropTypes.element]),
	copyText: PropTypes.func,
	data: PropTypes.object,
	loved: PropTypes.bool,
	next: PropTypes.func,
	prev: PropTypes.func,
	saveGradient: PropTypes.func,
	url: PropTypes.string,
};

const GeneratorCard = memo(
	({ children, copyText, data, loved, saveGradient, url, next, prev }) => {
		/* ------------------------------- PURE SVG's ------------------------------- */
		const PureLove = PureComponent(Love);
		const PureCode = PureComponent(Code);
		const PureArrowRight = PureComponent(ArrowRight);
		const PureSave = PureComponent(Save);
		/* ----------------------------- END PURE SVG's ----------------------------- */

		const [viewCode, setViewCode] = useState(false);

		return (
			<>
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
					{children}
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
								<span>{rgbToHex(data.color, 1)}</span>{' '}
								<PureArrowRight aria-hidden="true" />{' '}
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

						<div className="control__panel w-md-auto">
							<h6 className="d-none d-md-block">
								Tap space bar to generate new gradients
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
							<OverlayTrigger
								overlay={<Tooltip id="tooltip-disabled">CSS Code</Tooltip>}
							>
								<button
									onClick={() => {
										setViewCode(true);
									}}
									type="button"
									className="none-button"
									aria-label="Show CSS Code"
								>
									<PureCode tabIndex="-1" />
								</button>
							</OverlayTrigger>
							<OverlayTrigger
								overlay={<Tooltip id="tooltip-disabled">Download</Tooltip>}
							>
								<button
									type="button"
									className="none-button ml-2"
									tabIndex="-1"
								>
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
							</OverlayTrigger>
							<OverlayTrigger
								overlay={<Tooltip id="tooltip-disabled">Save</Tooltip>}
							>
								<button
									onClick={() => saveGradient(data)}
									type="button"
									className="none-button ml-2"
									aria-label="Save Gradient"
								>
									<PureLove
										tabIndex="-1"
										aria-hidden="true"
										focusable="false"
										className={`${loved && 'active_love'}`}
									/>
								</button>
							</OverlayTrigger>
							<ShareDropdown data={data} save={() => saveGradient(data)} />
						</BorderWrap>
					</div>
				</GenerateWrapper>
			</>
		);
	}
);

GeneratorCard.propTypes = proptypes;

export default GeneratorCard;
