/* -------------------------------------------------------------------------- */
/*                            External Dependencies                           */
/* -------------------------------------------------------------------------- */
import React, { useEffect, useCallback } from 'react';
import PropTypes from 'prop-types';

/* -------------------------- Internal Dependecies -------------------------- */
import { Snippet } from 'components/card/style';
import { rgbToHex } from 'utils';

/* ---------------------------- Image Dependency ---------------------------- */
import { ReactComponent as Close } from '../../assets/icons/icon-close.svg';

/* ------------------------- CodeSnippnets PropTypes ------------------------ */
const propTypes = {
	copyText: PropTypes.func,
	setViewCode: PropTypes.func,
	data: PropTypes.object,
	palette: PropTypes.bool,
};

const CodeSnippnets = ({ copyText, setViewCode, data, palette = false }) => {
	const handleEscKey = useCallback(
		(e) => {
			if (e.key === 'Escape') {
				// write your logic here.
				setViewCode(false);
			}
		},
		[setViewCode]
	);

	useEffect(
		function setupListener() {
			window.addEventListener('keydown', handleEscKey);

			return function cleanupListener() {
				window.removeEventListener('keydown', handleEscKey);
			};
		},
		[handleEscKey]
	);
	return (
		<Snippet className="snippet fadeIn">
			<div className="css_code">
				<button
					className="ml-auto d-block none-button"
					type="button"
					aria-label="Close Code"
					onClick={() => setViewCode(false)}
				>
					<Close aria-hidden="true" />
				</button>
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
							className="btn btn-piggment"
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
									<dd key={index * Math.random()}>{`--color${index +
										1}: ${color};`}</dd>
								))}
							</code>
						</article>
						<button
							className="btn btn-piggment"
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

CodeSnippnets.propTypes = propTypes;

export default CodeSnippnets;
