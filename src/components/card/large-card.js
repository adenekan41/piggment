import React, { useState } from 'react';
import CodeSnippnets from 'components/snippet';
import PropTypes from 'prop-types';

import { LargeCardWrapper, BorderWrap } from './style';

import { ReactComponent as Love } from '../../assets/icons/icon-love.svg';
import { ReactComponent as Code } from '../../assets/icons/icon-code.svg';
import { ReactComponent as Save } from '../../assets/icons/icon-save.svg';

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
						<a download={`Pigment-${data.name}`} href={url} title={data.name}>
							<Save />
						</a>

						<Love
							onClick={() => saveGradient(data)}
							className={`${loved && 'active_love'} ml-2`}
						/>
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
