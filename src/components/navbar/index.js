import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { ReactComponent as Logo } from '../../assets/icons/logo_.svg';
import { ReactComponent as Love } from '../../assets/icons/icon-love.svg';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const NavLayout = () => {
	return (
		<NavWrapper fixed="top">
			<div className="container">
				<Navbar.Brand as={Link} to="/">
					<Logo />
				</Navbar.Brand>
				<Navbar.Toggle aria-controls="navbar" />
				<Navbar.Collapse id="navbar">
					<Nav className="ml-auto">
						<Nav.Link as={Link} to="/explore">
							Explore
						</Nav.Link>
						<Nav.Link as={Link} to="/">
							Generate
						</Nav.Link>

						<Nav.Link as={Link} to="/">
							Github
						</Nav.Link>
						<Nav.Link as={Link} to="/saved" className="saved">
							<Love className="mr-1" /> Saved gradients
						</Nav.Link>
					</Nav>
				</Navbar.Collapse>
			</div>
		</NavWrapper>
	);
};
const NavWrapper = styled(Navbar)`
	background: #fff8f0;
	svg {
		height: 28px;
		width: auto;
	}
	.nav-link {
		color: #717171;
		font-size: 15px;
		padding: 0.5rem 1rem !important;
		&.saved {
			svg {
				width: 18px;
				fill: var(--accent);
			}
		}
	}
`;
export default NavLayout;
