import React, { useState, useEffect } from 'react';

const ErrorBoundary = ({ children }) => {
	const [error, setError] = useState(null);
	const [errorInfo, setErrorInfo] = useState(null);

	useEffect(() => {
		return () => {
			setError(error);
			setErrorInfo(errorInfo);
		};
	}, [errorInfo, error]);

	if (errorInfo) {
		// Error path
		return (
			<div>
				<h2>Something went wrong.</h2>
				<details style={{ whiteSpace: 'pre-wrap' }}>
					{error && error.toString()}
					<br />
					{errorInfo.componentStack}
				</details>
			</div>
		);
	}
	// Normally, just render children
	return children;
};

export default ErrorBoundary;
