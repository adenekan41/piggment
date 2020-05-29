import styled from 'styled-components';
import { Modal } from 'react-bootstrap';

const ModalWrapper = styled(Modal)`
	.close_modal {
		fill: var(--black);
		margin-top: 2rem;
		cursor: pointer;
	}
	.header__modal {
		font-size: var(--font-md);
		color: var(--black);
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
			font-size: var(--font-sm);
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

export default ModalWrapper;
