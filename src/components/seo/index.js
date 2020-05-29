import React from 'react';
import PropTypes from 'prop-types';

import { Helmet } from 'react-helmet-async';

const SEO = ({ title, description }) => {
	return (
		<Helmet>
			<title>
				{title
					? `${title} | Piggment`
					: 'Piggment - The gradient you have always wanted'}
			</title>
			<meta
				name="description"
				content={
					description
						? `${description}  A curated collection of beautiful color gradients for designers and developers over the world. now you can generate, explore, easy CSS crossbrowser gradient codes all in one place`
						: 'The gradient you have always wanted. A curated collection of beautiful color gradients for designers and developers over the world. now you can generate, explore, easy CSS crossbrowser gradient codes all in one place.'
				}
			/>
			<meta
				property="og:description"
				content={
					description
						? `${description} A curated collection of beautiful color gradients for designers and developers over the world. now you can generate, explore, easy CSS crossbrowser gradient codes all in one place`
						: 'The gradient you have always wanted. A curated collection of beautiful color gradients for designers and developers over the world. now you can generate, explore, easy CSS crossbrowser gradient codes all in one place.'
				}
			/>
		</Helmet>
	);
};

SEO.propTypes = {
	title: PropTypes.string,
	description: PropTypes.string,
};

export default SEO;
