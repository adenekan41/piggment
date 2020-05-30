import React from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Link, NavLink, withRouter } from 'react-router-dom';

import { ReactComponent as Logo } from '../../assets/icons/logo_.svg';
import { ReactComponent as Love } from '../../assets/icons/icon-love.svg';

const NavLayout = ({ location }) => {
	return (
		<NavWrapper
			collapseOnSelect
			expand="md"
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
					<Logo />
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
							to="/saved"
							className="saved"
						>
							<Love className="mr-1" /> Saved
						</Nav.Link>
					</Nav>
				</Navbar.Collapse>
			</div>
		</NavWrapper>
	);
};
const NavWrapper = styled(Navbar)`
	background: #fff8f0;
	&.spaced__out {
		width: calc(100% - 40px);
		left: 50%;
		border-radius: 8px;
		transform: translate(-50%, 10px);
	}
	svg {
		height: 24px;
		width: auto;
		@media (max-width: 990px) {
			height: 21px;
		}
	}
	.navbar-brand {
		svg {
			width: auto;
			height: 33px;
		}
	}
	.navbar-toggler {
		border: none !important;
		padding: 0;
	}
	.dropdown-menu {
		margin: 0px;
		font-size: 14px;
		background: #fff8f0;
		border: none;
		box-shadow: 0 2px 15px #00000017;
	}
	.dropdown-item.active,
	.dropdown-item:active {
		color: #fff;
		text-decoration: none;
		background-color: var(--accent);
	}

	.nav-link {
		color: #717171;
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

NavLayout.propTypes = {
	location: PropTypes.object,
};

export default withRouter(NavLayout);
