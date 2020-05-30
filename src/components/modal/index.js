import React, { useContext, useEffect } from 'react';
import PropTypes from 'prop-types';

import { rgbToHex } from 'utils';
import Card from '../card';
import GradientLayout from '../card/card-container';
import GradientContext from '../../context';

import ModalWrapper from './style';
import { ReactComponent as Close } from '../../assets/icons/icon-close.svg';
import { ReactComponent as ArrowRight } from '../../assets/icons/icon-right.svg';

const ModalLayout = ({ show, setShow, data }) => {
	const { state, loadGradients } = useContext(GradientContext);

	useEffect(() => {
		if (state.length < 4) {
			loadGradients(4);
		}
	}, [loadGradients, state, show]);

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
			<h4 className="mb-4 header__modal">About Gradient.</h4>
			<div id="wite_up">
				<Card type="large" data={data} />
			</div>
			<div className="headers">
				<h2>{data.name}</h2>

				<p className="mt-3">
					<span>{rgbToHex(data.color, 1)}</span> <ArrowRight />{' '}
					<span>{rgbToHex(data.color, 0)}</span>
				</p>
				<p>
					Angle <ArrowRight /> {data.color.match(/\d+/g).shift()}
					deg
				</p>
				<div className="hexes__sections d-flex align-items-center">
					<span
						style={{ background: rgbToHex(data.color, 1) }}
						className="mr-4"
					/>{' '}
					<p className="d-block">{rgbToHex(data.color, 1)}</p>{' '}
					<ArrowRight className="mr-2" />
					{data.color
						.substring(data.color.indexOf('rgb'), data.color.indexOf('%'))
						.match(/\d+/g)
						.pop()}
					%
				</div>
				<br />
				<div className="hexes__sections d-flex align-items-center">
					<span
						style={{ background: rgbToHex(data.color, 0) }}
						className="mr-4"
					/>{' '}
					<p className="d-block">{rgbToHex(data.color, 0)}</p>{' '}
					<ArrowRight className="mr-2" />
					{data.color.match(/\d+/g).pop()}%
				</div>
			</div>

			<GradientLayout
				header="More Like This"
				state={state.slice(Math.max(state.length - 3, 1))}
				mode="see-more"
			/>
		</ModalWrapper>
	);
};

ModalLayout.propTypes = {
	show: PropTypes.bool,
	setShow: PropTypes.func,
	data: PropTypes.object,
};

export default ModalLayout;
