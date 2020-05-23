import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { ReactComponent as Logo } from '../../assets/icons/logo_.svg';
import styled from 'styled-components';

const NavLayout = () => {
	return (
		<NavWrapper fixed="top">
			<div className="container">
				<Navbar.Brand href="#home">
					<Logo />
				</Navbar.Brand>
				<Navbar.Toggle aria-controls="basic-navbar-nav" />
				<Navbar.Collapse id="basic-navbar-nav">
					<Nav className="ml-auto">
						<Nav.Link href="#home">Explore Gradient</Nav.Link>
						<Nav.Link href="#link">Generate</Nav.Link>
						<Nav.Link href="#link">About</Nav.Link>
						<Nav.Link href="#link">Github</Nav.Link>
					</Nav>
				</Navbar.Collapse>
			</div>
		</NavWrapper>
	);
};
const NavWrapper = styled(Navbar)`
	background: #fff8f0;
	svg {
		height: 41px;
		width: auto;
	}
	.nav-link {
		color: #717171;
		padding: 0.5rem 1rem !important;
	}
`;
export default NavLayout;
