import React from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import Home from 'pages';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import styled from 'styled-components';
import ErrorBoundary from 'components/error-boundary';
import NavLayout from 'components/navbar';
import Explore from 'pages/explore';
import SavedColors from 'pages/saved';
import DataProvider from 'context/provider';
import Footer from 'components/footer';
import Generate from 'pages/generate';

const routes = ({ location }) => (
	<Wrapper>
		<ErrorBoundary>
			{location.pathname !== '/generate' && <NavLayout />}
			<TransitionGroup>
				<CSSTransition
					key={location.key}
					timeout={{ enter: 300, exit: 300 }}
					classNames="fade"
				>
					<Switch location={location}>
						<DataProvider>
							<Route exact path="/" component={Home} />
							<Route exact path="/explore" component={Explore} />
							<Route exact path="/saved" component={SavedColors} />

							<Route exact path="/generate" component={Generate} />
						</DataProvider>
					</Switch>
				</CSSTransition>
			</TransitionGroup>
			{location.pathname !== '/generate' && <Footer />}
		</ErrorBoundary>
	</Wrapper>
);

const Wrapper = styled.div`
	.fade-enter {
		opacity: 0.6;
	}

	.fade-enter.fade-enter-active {
		opacity: 1;
		transition: opacity 0.4s ease-in;
	}

	.fade-exit {
		opacity: 1;
	}

	.fade-exit.fade-exit-active {
		opacity: 0.6;
		transition: opacity 0.4s ease-in;
	}
`;

routes.propTypes = {
	location: PropTypes.any,
};

export default withRouter(routes);
