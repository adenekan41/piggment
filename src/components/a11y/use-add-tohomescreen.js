import { useState, useEffect } from 'react';

const useAddToHomeScreen = () => {
	const [prompt, setState] = useState(null);

	const promptToInstall = () => {
		if (prompt) {
			return prompt.prompt();
		}
		return Promise.reject(new Error('Tried installing got an error'));
	};
	const ready = (e) => {
		e.preventDefault();
		setState(e);
	};
	useEffect(() => {
		window.addEventListener('beforeinstallprompt', ready);

		return () => {
			window.removeEventListener('beforeinstallprompt', ready);
		};
	}, []);

	return [prompt, promptToInstall];
};

export default useAddToHomeScreen;
