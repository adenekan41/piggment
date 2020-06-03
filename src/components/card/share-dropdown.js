import React from 'react';
import { Dropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import { ReactComponent as Share } from '../../assets/icons/icon-share.svg';

const ShareDropdown = ({ data, palette }) => {
	const copyText = () => {
		const textField = document.createElement('textarea');
		if (palette) {
			textField.innerText = `
      https://piggment.co/palette/${data.start.slice(1)}/${data.end.slice(
				1
			)}/${data.name.slice(1)}`;
		}

		document.body.appendChild(textField);
		textField.select();
		document.execCommand('copy');
		textField.remove();
	};
	return (
		<Dropdown className="d-inline share__button ml-2">
			<Dropdown.Toggle as={Share} />

			<Dropdown.Menu>
				<Dropdown.Item onClick={() => copyText()}>Copy Link</Dropdown.Item>
				<Dropdown.Divider />
				<Dropdown.Item
					as={Link}
					to={`/palette/${data.start.slice(1)}/${data.end.slice(
						1
					)}/${data.name.slice(1)}`}
				>
					View {data.name}
				</Dropdown.Item>
				<Dropdown.Item
					href={`http://twitter.com/share?text=View%20this%20amazing%20gradient%20pallet%20by%20piggment&url=http://piggment.co/palette/${data.start.slice(
						1
					)}/${data.end.slice(1)}/${data.name.slice(
						1
					)}&hashtags=colors,gradiens,palettes`}
					target="_blank"
				>
					Share on Twitter
				</Dropdown.Item>

				<Dropdown.Item
					href={`https://www.linkedin.com/shareArticle?mini=true&url=http://piggment.co/palette/${data.start.slice(
						1
					)}/${data.end.slice(1)}/${data.name.slice(
						1
					)}&summary=View%20this%20amazing%20gradient%20pallet%20by%20piggment&source=LinkedIn`}
				>
					Share on Linkedin
				</Dropdown.Item>
				<Dropdown.Item
					href={`https://www.facebook.com/sharer/sharer.php?u=http://piggment.co/palette/${data.start.slice(
						1
					)}/${data.end.slice(1)}/${data.name.slice(
						1
					)}&t=View%20this%20amazing%20gradient%20pallet%20by%20piggment`}
				>
					Share on Facebook
				</Dropdown.Item>
			</Dropdown.Menu>
		</Dropdown>
	);
};

ShareDropdown.propTypes = {
	data: PropTypes.object,
	palette: PropTypes.bool,
};

export default ShareDropdown;
