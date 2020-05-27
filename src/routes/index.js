import React, { lazy, Suspense } from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';

import { TransitionGroup, CSSTransition } from 'react-transition-group';
import styled from 'styled-components';
import ErrorBoundary from 'components/error-boundary';
import NavLayout from '../components/navbar';
import DataProvider from '../context/provider';
import Footer from '../components/footer';

import LogoPrimary from 'components/logo-primary';

const Explore = lazy(() => import('../pages/explore'));
const SavedColors = lazy(() => import('../pages/saved'));
const Home = lazy(() => import('../pages'));
const Generate = lazy(() => import('../pages/generate'));
const Terms = lazy(() => import('../pages/terms'));
const Privacy = lazy(() => import('../pages/privacy'));
const ContrastChecker = lazy(() => import('../pages/constrast-checker'));

const routes = ({ location }) => (
	<Wrapper>
		<ErrorBoundary>
			<NavLayout generate={location.pathname === '/generate'} />
			<TransitionGroup>
				<CSSTransition
					key={location.key}
					timeout={{ enter: 300, exit: 300 }}
					classNames="fade"
				>
					<Suspense fallback={<LogoPrimary />}>
						<Switch location={location}>
							<DataProvider>
								<Route exact path="/" component={Home} />
								<Route exact path="/explore" component={Explore} />
								<Route exact path="/saved" component={SavedColors} />

								<Route exact path="/generate" component={Generate} />
								<Route exact path="/terms" component={Terms} />
								<Route exact path="/privacy" component={Privacy} />
								<Route
									exact
									path="/contrast-checker"
									component={ContrastChecker}
								/>
							</DataProvider>
						</Switch>
					</Suspense>
				</CSSTransition>
			</TransitionGroup>
			{location.pathname !== '/generate' && (
				<Footer explore={location.pathname === '/explore'} />
			)}
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
