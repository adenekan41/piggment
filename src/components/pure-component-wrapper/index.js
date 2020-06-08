import React, { memo } from 'react';

const PureComponent = (WrappedComponent) =>
	memo((props) => <WrappedComponent {...props} />);

export default PureComponent;
