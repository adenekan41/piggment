import React, { lazy, Suspense } from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';

import { TransitionGroup, CSSTransition } from 'react-transition-group';
import styled from 'styled-components';
import ErrorBoundary from 'components/error-boundary';
import NavLayout from '../components/navbar';
import Footer from '../components/footer';

import LogoPrimary from 'components/logo-primary';
import SingleGradient from 'pages/single-gradient';
import SkipToMain from 'components/a11y/skip-to-main';

const Explore = lazy(() => import('../pages/explore'));
const SinglePallete = lazy(() => import('../pages/single-pallete'));
const NotFound = lazy(() => import('../pages/404'));
const About = lazy(() => import('../pages/about'));
const GeneratePalette = lazy(() => import('../pages/generate-palette'));
const Palette = lazy(() => import('../pages/palette'));
const SavedColors = lazy(() => import('../pages/saved'));
const Home = lazy(() => import('../pages'));
const Generate = lazy(() => import('../pages/generate'));
const Terms = lazy(() => import('../pages/terms'));
const Privacy = lazy(() => import('../pages/privacy'));
const ContrastChecker = lazy(() => import('../pages/constrast-checker'));

const routes = ({ location }) => (
	<Wrapper>
		<ErrorBoundary>
			<SkipToMain content="main" />
			<NavLayout />
			<main id="main">
				<TransitionGroup>
					<CSSTransition
						key={location.key}
						timeout={{ enter: 300, exit: 300 }}
						classNames="fade"
					>
						<Suspense fallback={<LogoPrimary />}>
							<Switch location={location}>
								<Route exact path="/" component={Home} />
								<Route path="/explore" component={Explore} />
								<Route path="/saved" component={SavedColors} />
								<Route path="/generate" component={Generate} />
								<Route path="/terms" component={Terms} />
								<Route path="/privacy" component={Privacy} />
								<Route exact path="/palette" component={Palette} />
								<Route
									path="/palette/:color1/:color2/:name/:count"
									component={SinglePallete}
								/>
								<Route
									exact
									path="/gradient/:color/:name"
									component={SingleGradient}
								/>
								<Route path="/about" component={About} />
								<Route path="/generate-palette" component={GeneratePalette} />
								<Route path="/contrast-checker" component={ContrastChecker} />
								<Route path="*" component={NotFound} />
							</Switch>
						</Suspense>
					</CSSTransition>
				</TransitionGroup>
				{!location.pathname.includes('generate') && (
					<Footer explore={location.pathname === '/explore'} />
				)}
			</main>
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
