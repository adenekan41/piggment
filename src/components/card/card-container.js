import React, { useState, useEffect, useContext } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import { getState } from 'codewonders-helpers/bundle-cjs/helpers/localstorage';
import { clearState, setState as saveState } from 'codewonders-helpers';

import { Link } from 'react-router-dom';
import { GradientContext } from 'context';

import { ReactComponent as Reload } from '../../assets/icons/icon-refresh.svg';
import { ReactComponent as Circle } from '../../assets/icons/icon-circle.svg';
import { ReactComponent as Layout } from '../../assets/icons/icon-layout.svg';
import Card from '.';

const GradientLayout = React.memo(
	({ header, noRefresh = false, state, mode }) => {
		const [layout, setLayout] = useState(false);
		const { clearGradient } = useContext(GradientContext);
		useEffect(() => {
			if (getState('LAYOUT')) {
				setLayout(true);
			}
		}, []);

		return (
			<>
				<CardWrapper className="d-flex justify-content-between explore_more">
					<h2>
						{header}{' '}
						{mode === 'see-more' && (
							<Link to="/explore" className="ml-2">
								See All
							</Link>
						)}
					</h2>
					<div className="d-flex">
						<div
							onClick={() => {
								saveState('LAYOUT', 1);
								setLayout(true);
							}}
							className="mr-4"
						>
							<Circle
								className={getState('LAYOUT') || layout ? 'active' : null}
							/>
						</div>
						<div
							className="mr-4"
							onClick={() => {
								clearState('LAYOUT');
								setLayout(false);
							}}
						>
							<Layout
								className={!getState('LAYOUT') || !layout ? 'active' : null}
							/>
						</div>
						{noRefresh && (
							<span onClick={() => clearGradient()}>
								<Reload className="mr-1" />
								Refresh
							</span>
						)}
					</div>
				</CardWrapper>
				<Grid>
					{state &&
						state.map((bg_gradient, index) => (
							<Card
								data={bg_gradient}
								key={index + bg_gradient.name}
								mode={mode}
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
			font-size: 15px;
			svg {
				fill: var(--accent) !important;
        width: 15px;
        
			}
    }
    a {
      border: none;
      color: var(--accent);
      font-size: 15px;
      font-weight:400;
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
	}
	h2 {
		font-weight: 600;
		font-size: 1.62em;
		color: var(--black);
		margin-bottom: 1.4rem;
		letter-spacing: -1.3px;
	}
`;

const Grid = styled.div`
	display: grid;
	grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
	grid-template-rows: 1fr;
	grid-column-gap: 40px;
	grid-row-gap: 40px;
`;

GradientLayout.propTypes = {
	header: PropTypes.string,
	onClick: PropTypes.func,
	noRefresh: PropTypes.bool,
	state: PropTypes.array,
	mode: PropTypes.string,
};
export default GradientLayout;
