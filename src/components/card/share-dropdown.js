/* -------------------------------------------------------------------------- */
/*                            External Dependencies                           */
/* -------------------------------------------------------------------------- */
import React, { memo, useContext } from 'react';
import { Dropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

/* -------------------------- Internal Dependencies ------------------------- */
import { logEvent } from 'utils/analytics';
import GradientContext from 'context';

/* --------------------------- Image Dependencies --------------------------- */
import { ReactComponent as Share } from '../../assets/icons/icon-share.svg';

/* ------------------------- ShareDropdown PropTypes ------------------------ */
const propTypes = {
	data: PropTypes.object,
	palette: PropTypes.bool,
	save: PropTypes.func,
};

const ShareDropdown = memo(({ data, palette, save }) => {
	/* -------------------------------- PURE SVG -------------------------------- */
	const PureShare = memo(
		React.forwardRef((props, ref) => <Share {...props} ref={ref} />),
		() => true
	);
	/* ----------------------------------- End ---------------------------------- */

	const { setSnarkbar } = useContext(GradientContext);

	const share = palette
		? {
				link: `
    https://piggment.co/palette/${data.start.slice(1)}/${data.end.slice(
					1
				)}/${data.name.slice(1)}/${data.count}`,
				message: 'View%20this%20amazing%20gradient%20pallet%20by%20piggment',
		  }
		: {
				link: `
    https://piggment.co/gradient/${window.btoa(
			data.color
		)}/${encodeURIComponent(data.name)}`,
				message: 'View%20this%20amazing%20gradient%20by%20piggment',
		  };

	const copyText = () => {
		const textField = document.createElement('textarea');

		textField.innerText = share.link;

		document.body.appendChild(textField);
		textField.select();
		document.execCommand('copy');
		textField.remove();
		setSnarkbar('Link copied to clipboard');
	};

	return (
		<Dropdown className="d-inline share__button ml-2">
			<Dropdown.Toggle as={PureShare} />

			<Dropdown.Menu>
				<Dropdown.Item onClick={() => copyText()}>Copy Link</Dropdown.Item>

				<Dropdown.Item
					as={Link}
					to={`/${share.link
						.split('/')
						.slice(3)
						.join('/')}`}
				>
					View / Edit ({data.name})
				</Dropdown.Item>
				<Dropdown.Item onClick={save}>Save in pocket</Dropdown.Item>
				<Dropdown.Divider />
				<Dropdown.Item
					href={`http://twitter.com/share?text=${share.message}&url=${encodeURI(
						share.link
					)}&hashtags=colors,gradiens,palettes`}
					target="_blank"
					onClick={() =>
						logEvent('Share', 'User Shared To Twitter', 'Share To Twitter')
					}
				>
					<span className="mr-2" aria-hidden="true" focusable="false">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="24"
							height="24"
							viewBox="0 0 24 24"
						>
							<path
								fill="#1da1f2"
								d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"
							/>
						</svg>
					</span>
					Share on Twitter
				</Dropdown.Item>

				<Dropdown.Item
					href={`https://www.linkedin.com/shareArticle?mini=true&url=${encodeURI(
						share.link
					)}&summary=${share.message}&source=LinkedIn`}
					target="_blank"
					onClick={() =>
						logEvent('Share', 'User Shared To Linkedin', 'Share To Linkedin')
					}
				>
					<span className="mr-2" aria-hidden="true" focusable="false">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="24"
							height="24"
							viewBox="0 0 24 24"
						>
							<path
								fill="#0077b5"
								d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z"
							/>
						</svg>
					</span>
					Share on Linkedin
				</Dropdown.Item>
				<Dropdown.Item
					href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURI(
						share.link
					)}&t=${share.message}`}
					target="_blank"
					onClick={() =>
						logEvent('Share', 'User Shared To Facebook', 'Share To Facebook')
					}
				>
					<span className="mr-2" aria-hidden="true" focusable="false">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="24"
							height="24"
							viewBox="0 0 24 24"
						>
							<path
								fill="#1877f2"
								d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"
							/>
						</svg>
					</span>
					Share on Facebook
				</Dropdown.Item>
			</Dropdown.Menu>
		</Dropdown>
	);
});

ShareDropdown.propTypes = propTypes;
export default ShareDropdown;
