import React from 'react';
import PropTypes from 'prop-types';

import { Snippet } from 'components/card/style';
import { rgbToHex } from 'utils';

import { ReactComponent as Close } from '../../assets/icons/icon-close.svg';

const CodeSnippnets = ({ copyText, setViewCode, data, palette = false }) => {
	return (
		<Snippet className="snippet fadeIn">
			<div className="css_code">
				<Close className="ml-auto d-block" onClick={() => setViewCode(false)} />
				<h4>CSS Code.</h4>
				{!palette ? (
					<>
						<article>
							<code>
								<dd>background: {rgbToHex(data.color, 0)};</dd>{' '}
								{'/* fallback for old browsers */'}
							</code>
							<code>
								<dd>background: -webkit-{data.color};</dd>
								{'/* Chrome 10-25, Safari 5.1-6 */'}
							</code>
							<code>
								<dd>background: {data.color};</dd>
							</code>
						</article>
						<button
							className="btn btn-pigment"
							onClick={() => copyText()}
							type="button"
						>
							Copy To Clipboard
						</button>
					</>
				) : (
					<>
						<article>
							<code>
								<dd>background: {data.colors[0]};</dd>{' '}
								{'/* fallback for old browsers */'}
							</code>

							<code>
								{'/* CSS Tokens */'}
								{data.colors.map((color, index) => (
									<dd key={index * Date.now()}>{`--color${index +
										1}: ${color};`}</dd>
								))}
							</code>
						</article>
						<button
							className="btn btn-pigment"
							onClick={() => copyText()}
							type="button"
						>
							Copy To Clipboard
						</button>
					</>
				)}
			</div>
		</Snippet>
	);
};

CodeSnippnets.propTypes = {
	copyText: PropTypes.func,
	setViewCode: PropTypes.func,
	data: PropTypes.object,
};

export default CodeSnippnets;
