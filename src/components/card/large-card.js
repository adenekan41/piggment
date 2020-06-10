/* -------------------------------------------------------------------------- */
/*                            External Dependencies                           */
/* -------------------------------------------------------------------------- */
import React, { useState, memo } from 'react';
import PropTypes from 'prop-types';
import { OverlayTrigger, Tooltip } from 'react-bootstrap';

/* -------------------------- Internal Dependencies ------------------------- */
import CodeSnippnets from 'components/snippet';
import PureComponent from 'components/pure-component-wrapper';
import ShareDropdown from './share-dropdown';

/* ---------------------------- Style Dependency ---------------------------- */
import { LargeCardWrapper, BorderWrap } from './style';

/* ---------------------------- Image Dependecies --------------------------- */
import { ReactComponent as Love } from '../../assets/icons/icon-love.svg';
import { ReactComponent as Code } from '../../assets/icons/icon-code.svg';
import { ReactComponent as Save } from '../../assets/icons/icon-save.svg';

/* --------------------------- LargeCard PropTypes -------------------------- */
const propTypes = {
	children: PropTypes.oneOfType([PropTypes.node, PropTypes.element]),
	copyText: PropTypes.func,
	data: PropTypes.object,
	loved: PropTypes.bool,
	saveGradient: PropTypes.func,
	url: PropTypes.string,
};

const LargeCard = memo(
	({ children, copyText, data, loved, saveGradient, url }) => {
		/* ------------------------------- PURE SVG's ------------------------------- */
		const PureLove = PureComponent(Love);
		const PureCode = PureComponent(Code);
		const PureSave = PureComponent(Save);
		/* ----------------------------- END PURE SVG's ----------------------------- */

		const [viewCode, setViewCode] = useState(false);
		return (
			<>
				<LargeCardWrapper
					style={{
						background: data.color,
					}}
					className="large__sum-card"
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
				</LargeCardWrapper>
			</>
		);
	}
);

LargeCard.propTypes = propTypes;

export default LargeCard;
