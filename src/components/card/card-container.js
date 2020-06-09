/* -------------------------------------------------------------------------- */
/*                             External Dependcies                            */
/* -------------------------------------------------------------------------- */
import React, { useState, useEffect, useContext } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { getState } from 'codewonders-helpers/bundle-cjs/helpers/localstorage';
import { clearState, setState as saveState } from 'codewonders-helpers';

/* -------------------------- Internal Dependencies ------------------------- */
import PureComponent from 'components/pure-component-wrapper';
import GradientContext from '../../context';
import Card from '.';

/* --------------------------- Image Dependencies --------------------------- */
import { ReactComponent as Reload } from '../../assets/icons/icon-refresh.svg';
import { ReactComponent as Circle } from '../../assets/icons/icon-circle.svg';
import { ReactComponent as Box } from '../../assets/icons/icon-box.svg';

/* --------------------------- GradientLayout PropTypes --------------------------- */
const propTypes = {
	header: PropTypes.string,
	mode: PropTypes.string,
	noRefresh: PropTypes.bool,
	palette: PropTypes.bool,
	state: PropTypes.array,
};

const GradientLayout = React.memo(
	({ header, noRefresh = false, state, mode, palette = false }) => {
		/* ------------------------------- PURE SVG's ------------------------------- */
		const PureReload = PureComponent(Reload);
		const PureCircle = PureComponent(Circle);
		const PureBox = PureComponent(Box);
		/* ----------------------------- END PURE SVG's ----------------------------- */

		const [layout, setLayout] = useState(false);
		const { clearGradient } = useContext(GradientContext);

		useEffect(() => {
			if (getState('LAYOUT')) {
				setLayout(true);
			}
		}, []);

		return (
			<>
				<CardWrapper className="d-md-flex d-block justify-content-between explore_more">
					<h2>
						{header}{' '}
						{mode === 'see-more' && (
							<Link to="/explore" className="ml-2">
								See All
							</Link>
						)}
					</h2>
					<div className="d-flex mb-md-0 mb-3">
						<button
							onClick={() => {
								saveState('LAYOUT', 1);
								setLayout(true);
							}}
							className="mr-4 none-button"
							type="button"
							aria-label="Circle Layout"
						>
							<PureCircle
								className={getState('LAYOUT') || layout ? 'active' : null}
								aria-hidden="true"
								focusable="false"
							/>
						</button>

						<button
							className="mr-4 none-button"
							onClick={() => {
								clearState('LAYOUT');
								setLayout(false);
							}}
							type="button"
							aria-label="Box Layout"
						>
							<PureBox
								className={!getState('LAYOUT') || !layout ? 'active' : null}
								aria-hidden="true"
								focusable="false"
							/>
						</button>
						{noRefresh && (
							<button
								onClick={() => clearGradient()}
								className="none-button"
								type="button"
								aria-label="Refresh"
							>
								<PureReload
									className="mr-1"
									aria-hidden="true"
									focusable="false"
								/>
								Refresh
							</button>
						)}
					</div>
				</CardWrapper>
				<Grid className="grid">
					{state &&
						state.map((bg_gradient, index) => (
							<Card
								data={bg_gradient}
								key={index + Date.now()}
								mode={mode}
								palette={
									bg_gradient.colors && bg_gradient.colors.length > 0
										? true
										: palette
								}
								layout={getState('LAYOUT') || layout ? 'circle' : null}
							/>
						))}
				</Grid>
			</>
		);
	}
);

const CardWrapper = styled.nav`
	align-items: center;
	span {
		cursor: pointer;
		color: var(--accent);
		border-bottom: 2px solid var(--theme-primary);
		font-size: var(--font-sm);
		svg {
			fill: var(--accent) !important;
			width: 15px;
		}
	}
	a {
		border: none;
		color: var(--accent);
		font-size: 15px !important;
		font-weight: 400;
		letter-spacing: 0px;
	}
	div {
		svg {
			fill: #adadad;
			width: 18px;
			cursor: pointer;
			&.active {
				fill: var(--accent) !important;
			}
		}
	}

	h2 {
		font-weight: 600;
		font-size: var(--font-x-md);
		color: var(--black);
		margin-bottom: 1.4rem;
		letter-spacing: -1.3px;
		@media (max-width: 990px) {
			font-size: 1.3em;
		}
	}
`;

const Grid = styled.div`
	display: grid;
	grid-template-columns: repeat(auto-fill, minmax(19em, 1fr));
	grid-template-rows: 1fr;
	grid-column-gap: 40px;
	grid-row-gap: 40px;
`;

GradientLayout.propTypes = propTypes;

export default GradientLayout;
