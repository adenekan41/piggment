/* -------------------------------------------------------------------------- */
/*                            External Dependencies                           */
/* -------------------------------------------------------------------------- */
import React, { useContext, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

/* -------------------------- Internal Dependecies -------------------------- */
import { rgbToHex } from 'utils';
import Card from '../card';
import GradientLayout from '../card/card-container';
import GradientContext from '../../context';

/* ---------------------------- Style Dependency ---------------------------- */
import ModalWrapper from './style';

/* --------------------------- Image Dependencies --------------------------- */
import Close from '../../assets/icons/icon-close.svg';
import ArrowRight from '../../assets/icons/icon-right.svg';

/* -------------------------- ModalLayout PropTypes ------------------------- */
const propTypes = {
	show: PropTypes.bool,
	setShow: PropTypes.func,
	data: PropTypes.object,
};

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
			<button
				className="none-button"
				onClick={() => setShow(false)}
				type="button"
			>
				<img
					src={Close}
					className="d-block ml-auto mb-5 close_modal"
					alt="close"
				/>
			</button>

			<h4 className="mb-4 header__modal">About Gradient.</h4>
			<div id="wite_up">
				<Card type="large" data={data} />
			</div>
			<div className="headers">
				<h2>{data.name}</h2>

				<p className="mt-3">
					<span>{rgbToHex(data.color, 1)}</span>
					<img src={ArrowRight} alt="Arrow Right" />
					<span>{rgbToHex(data.color, 0)}</span>
				</p>
				<p>
					Angle <img src={ArrowRight} alt="Arrow Right" />
					{data.color.match(/\d+/g).shift()}
					deg
				</p>
				<div className="hexes__sections d-flex align-items-center">
					<span
						style={{ background: rgbToHex(data.color, 1) }}
						className="mr-4"
					/>
					<p className="d-block">{rgbToHex(data.color, 1)}</p>
					<img src={ArrowRight} alt="Arrow Right" className="mr-2" />
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
					/>
					<p className="d-block">{rgbToHex(data.color, 0)}</p>
					<img src={ArrowRight} alt="Arrow Right" className="mr-2" />
					{data.color.match(/\d+/g).pop()}%
				</div>
				<Link
					className="btn btn-outline-piggment mt-4"
					to={`/gradient/${window.btoa(data.color)}/${data.name}`}
				>
					Edit Palette
				</Link>
			</div>

			<GradientLayout
				header="More Like This"
				state={state.slice(Math.max(state.length - 3, 1))}
				mode="see-more"
			/>
		</ModalWrapper>
	);
};

ModalLayout.propTypes = propTypes;

export default ModalLayout;
