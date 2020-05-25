import React, { useContext, useEffect } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import { Modal } from 'react-bootstrap';
import Card from 'components/card';
import GradientLayout from 'components/card/card-container';
import { GradientContext } from 'context';
import { rgbToHex } from 'utils';

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
			// onShow={() => {
			// 	if (window.document.getElementsByClassName('modal').length > 1) {
			// 		window.document.getElementsByClassName('modal')[0].remove();
			// 	}
			// }}
			aria-labelledby="example-modal-sizes-title-sm"
			size="lg"
			onEscapeKeyDown={setShow}
		>
			<Close
				className="d-block ml-auto mb-5 close_modal"
				onClick={() => setShow(false)}
			/>
			<h4 className="mb-4">About Gradient.</h4>
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
					Angle <ArrowRight />{' '}
					{data.color
						.split('deg')
						.shift()
						.replace(/\/$/, '')
						.split('(')
						.pop()}
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
						.split('rgb')
						.slice(1)
						.join('')
						.split(' ')

						.filter((fl) => fl.includes('%'))[0]
						.slice(0, -1)}
				</div>
				<br />
				<div className="hexes__sections d-flex align-items-center">
					<span
						style={{ background: rgbToHex(data.color, 0) }}
						className="mr-4"
					/>{' '}
					<p className="d-block">{rgbToHex(data.color, 0)}</p>{' '}
					<ArrowRight className="mr-2" />
					{data.color
						.split('rgb')
						.slice(1)
						.join('')
						.split(' ')

						.filter((fl) => fl.includes('%'))[1]
						.slice(0, -1)}
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

const ModalWrapper = styled(Modal)`
	.close_modal {
		fill: var(--black);
		margin-top: 2rem;
		cursor: pointer;
	}

	#wite_up {
		.write__up {
			background: #fff !important;
			h4 {
				color: #7b7b7b !important;
			}
			p {
				color: #bbbbbb !important;
			}
			svg {
				fill: #989898;
			}
		}
	}
	.modal-content {
		border: none;
		background-color: #fff8f0 !important;
		.headers {
			margin-bottom: 5rem;
			h2 {
				font-size: 36px;
				text-transform: capitalize;
				font-weight: 500;
				margin-top: 2rem;

				color: var(--black);
				letter-spacing: -1.3px;
				&::first-letter {
					font-size: 75px;
					font-family: var(--font-secondary);
					font-weight: 900;
				}
			}
			.hexes__sections {
				span {
					width: 80px;
					height: 80px;
					display: block;
					border-radius: 50%;
				}
				p {
					margin: 0 9px 0 0;
				}
			}
		}
	}
	@media (min-width: 992px) {
		.modal-lg,
		.modal-xl {
			max-width: 870px;
		}
	}

	.grid {
		font-size: 0.8em;
	}
`;

ModalLayout.propTypes = {
	show: PropTypes.bool,
	setShow: PropTypes.func,
	data: PropTypes.object,
};
export default ModalLayout;
