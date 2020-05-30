import React, { useState } from 'react';
import CodeSnippnets from 'components/snippet';
import PropTypes from 'prop-types';

import { BorderWrap, GenerateWrapper } from './style';

import { ReactComponent as Love } from '../../assets/icons/icon-love.svg';
import { ReactComponent as Code } from '../../assets/icons/icon-code.svg';
import { ReactComponent as ArrowRight } from '../../assets/icons/icon-right.svg';
import { ReactComponent as Eye } from '../../assets/icons/icon-eye.svg';
import ModalPalette from 'components/modal/palette';

const GeneratorPaletteCard = ({
	copyText,
	data,
	loved,
	saveGradient,
	next,
	prev,
}) => {
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
							<span>{data.start}</span> <ArrowRight /> <span>{data.end}</span>
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

					<div className="control__panel">
						<h6>Tap space bar to generate new gradient palettes</h6>
						<div className="d-flex justify-content-between">
							<span onClick={prev}>
								<ArrowRight style={{ transform: 'rotate(180deg)' }} /> Previous
							</span>
							<span onClick={next}>
								Next <ArrowRight />
							</span>
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
};

GeneratorPaletteCard.propTypes = {
	copyText: PropTypes.func,
	data: PropTypes.object,
	loved: PropTypes.bool,
	saveGradient: PropTypes.func,
	next: PropTypes.func,
	prev: PropTypes.func,
};

export default GeneratorPaletteCard;
