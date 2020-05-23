import React from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import Home from 'pages/home';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import styled from 'styled-components';
import ErrorBoundary from 'components/error-boundary';
import NavLayout from 'components/navbar';

const routes = ({ location }) => (
	<Wrapper>
		<ErrorBoundary>
			<NavLayout />
			<TransitionGroup>
				<CSSTransition
					key={location.key}
					timeout={{ enter: 300, exit: 300 }}
					classNames="fade"
				>
					<Switch location={location}>
						<Route exact path="/" component={Home} />
					</Switch>
				</CSSTransition>
			</TransitionGroup>
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
