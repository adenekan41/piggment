/* -------------------------------------------------------------------------- */
/*                            External Dependencies                           */
/* -------------------------------------------------------------------------- */
import React, { memo } from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import { Link, NavLink, withRouter } from 'react-router-dom';
import { useAimScroll } from 'aimscroll';
/* -------------------------- Internal Dependencies ------------------------- */
import PureComponent from 'components/pure-component-wrapper';

/* --------------------------- Image Dependencies --------------------------- */
import { ReactComponent as Love } from '../../assets/icons/icon-love.svg';
import Logo from '../../assets/icons/logo_.svg';

/* --------------------------- NavLayout PropTypes -------------------------- */
const propTypes = {
	location: PropTypes.object,
};

const NavLayout = memo(({ location }) => {
	const PureLove = PureComponent(Love);
	const [isScrolled] = useAimScroll(50);

	return (
		<NavWrapper
			collapseOnSelect
			isScrolled={location.pathname.includes('generate') ? true : isScrolled}
			expand="lg"
			fixed="top"
			className={location.pathname.includes('generate') && 'spaced__out'}
		>
			<div
				className={
					(location.pathname.includes('generate') && 'container-fluid ') ||
					'container'
				}
			>
				<Navbar.Brand as={Link} to="/">
					<img src={Logo} alt="Piggment Logo" />
				</Navbar.Brand>
				<Navbar.Toggle aria-controls="navbar" />
				<Navbar.Collapse id="navbar">
					<Nav className="ml-auto">
						<Nav.Link
							activeClassName="is-active"
							exact
							as={NavLink}
							to="/explore"
						>
							Explore
						</Nav.Link>

						<NavDropdown title="Generate" id="generate">
							<NavDropdown.Item
								activeClassName="active"
								exact
								as={NavLink}
								to="/generate"
							>
								Generate Gradient
							</NavDropdown.Item>
							<NavDropdown.Item
								activeClassName="active"
								exact
								as={NavLink}
								to="/generate-palette"
							>
								Generate Palette
							</NavDropdown.Item>
						</NavDropdown>
						<Nav.Link
							activeClassName="is-active"
							exact
							as={NavLink}
							to="/palette"
						>
							Palettes
						</Nav.Link>
						<Nav.Link
							activeClassName="is-active"
							exact
							as={NavLink}
							to="/contrast-checker"
						>
							Contrast Checker
						</Nav.Link>
						<Nav.Link
							activeClassName="is-active"
							exact
							as={NavLink}
							to="/extension"
						>
							Chrome Extension
						</Nav.Link>
						<Nav.Link
							activeClassName="is-active"
							exact
							as={NavLink}
							to="/saved"
							className="saved"
						>
							<PureLove className="mr-1" aria-hidden="true" />
							Saved
						</Nav.Link>
					</Nav>
				</Navbar.Collapse>
			</div>
		</NavWrapper>
	);
});
const NavWrapper = styled(Navbar)`
	background: transparent;
	padding: 15px 1rem;
	${({ isScrolled }) =>
		isScrolled &&
		css`
			background: #fff;
		`}
	.navbar-collapse {
		@media (max-width: 992px) {
			background: #fff !important;
		}
	}
	&.spaced__out {
		width: calc(100% - 40px);
		left: 50%;
		border-radius: 8px;
		transform: translate(-50%, 10px);
		@media (max-width: 989px) {
			width: calc(100% - 10px);
		}
	}
	svg {
		height: 24px;
		width: auto;
		@media (max-width: 990px) {
			height: 21px;
		}
	}
	.navbar-brand {
		img {
			width: auto;
			height: 30px;
			@media (max-width: 990px) {
				height: 24px !important;
			}
		}
	}
	.navbar-toggler {
		border: none !important;
		padding: 0;
	}
	.navbar-toggler-icon {
		display: inline-block;
		width: 1.2em;
		height: 1.2em;
	}
	.dropdown-menu {
		margin: 0px;
		font-size: 14px;
		background: #fff8f0;
		border: none;
		box-shadow: 0 2px 15px #00000017;
	}

	.nav-link {
		color: rgb(0 0 0 / 80%) !important;
		font-size: var(--font-sm);
		padding: 0.5rem 1rem !important;
		&.is-active {
			color: var(--black) !important;
			font-weight: 600;
		}
		&.saved {
			svg {
				width: 18px;
				fill: var(--accent);
			}
		}
	}
`;

NavLayout.propTypes = propTypes;

export default withRouter(NavLayout);
