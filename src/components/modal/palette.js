import React, { useContext, useEffect } from 'react';
import PropTypes from 'prop-types';

import Card from '../card';
import GradientLayout from '../card/card-container';
import GradientContext from '../../context';
import ModalWrapper from './style';

import { ReactComponent as Close } from '../../assets/icons/icon-close.svg';
import { ReactComponent as ArrowRight } from '../../assets/icons/icon-right.svg';

const ModalPalette = ({ show, setShow, data }) => {
	const { palette, loadpalettes } = useContext(GradientContext);

	useEffect(() => {
		if (palette.length < 4) {
			loadpalettes(4);
		}
	}, [loadpalettes, palette, show]);

	return (
		<ModalWrapper
			show={show}
			onHide={setShow}
			aria-labelledby={data.name}
			size="lg"
			onEscapeKeyDown={setShow}
		>
			<Close
				className="d-block ml-auto mb-5 close_modal"
				onClick={() => setShow(false)}
			/>
			<h4 className="mb-4 header__modal">About Palette.</h4>
			<div id="wite_up">
				<Card palette cardMode="large" data={data} />
			</div>
			<div className="headers">
				<h2>{data.name}</h2>

				<div className="hexes__sections d-flex align-items-center">
					<div className="d-flex align-items-center">
						{' '}
						<p className="d-block">{data.start}</p>{' '}
						<span style={{ background: data.start }} className="mr-4" />{' '}
					</div>
					<ArrowRight className="mr-4" />
					<div className="d-flex align-items-center">
						<span style={{ background: data.end }} className="mr-2" />{' '}
						<p className="d-block">{data.end}</p>{' '}
					</div>
				</div>
				<br />
			</div>

			<GradientLayout
				header="More Like This"
				state={palette.slice(Math.max(palette.length - 3, 1))}
				palette
			/>
		</ModalWrapper>
	);
};

ModalPalette.propTypes = {
	show: PropTypes.bool,
	setShow: PropTypes.func,
	data: PropTypes.object,
};

export default ModalPalette;
