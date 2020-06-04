import React, { useState } from 'react';
import CodeSnippnets from 'components/snippet';
import PropTypes from 'prop-types';

import { LargeCardWrapper, BorderWrap } from './style';

import { ReactComponent as Love } from '../../assets/icons/icon-love.svg';
import { ReactComponent as Code } from '../../assets/icons/icon-code.svg';
import { ReactComponent as Save } from '../../assets/icons/icon-save.svg';
import ShareDropdown from './share-dropdown';

const LargeCard = ({ children, copyText, data, loved, saveGradient, url }) => {
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

						<button type="button" className="none-button ml-2" tabIndex="-1">
							<a
								download={`Piggment-${data.name}`}
								href={url}
								title={data.name}
								tabIndex="0"
							>
								<Save tabIndex="-1" />
							</a>
						</button>

						<button
							onClick={() => saveGradient(data)}
							type="button"
							className="none-button ml-2"
						>
							<Love tabIndex="-1" className={`${loved && 'active_love'}`} />
						</button>
						<ShareDropdown data={data} save={() => saveGradient(data)} />
					</BorderWrap>
				</div>
			</LargeCardWrapper>
		</>
	);
};

LargeCard.propTypes = {
	children: PropTypes.oneOfType([PropTypes.node, PropTypes.element]),
	copyText: PropTypes.func,
	data: PropTypes.object,
	loved: PropTypes.bool,
	saveGradient: PropTypes.func,
	url: PropTypes.string,
};

export default LargeCard;
