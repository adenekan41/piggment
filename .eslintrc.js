module.exports = {
	env: {
		browser: true,
		es6: true,
		node: true,
	},
	extends: ['airbnb', 'prettier', 'prettier/react'],
	globals: {
		Atomics: 'readonly',
		SharedArrayBuffer: 'readonly',
	},
	parserOptions: {
		ecmaFeatures: {
			jsx: true,
		},
		ecmaVersion: 2018,
		sourceType: 'module',
	},
	plugins: ['react', 'prettier'],
	rules: {
		'prettier/prettier': ['error'],
		'react/jsx-filename-extension': [0],
		'import/no-unresolved': [0],
		'no-param-reassign': [0],
		'react/jsx-props-no-spreading': [0],
		'react/default-props-match-prop-types': [0],
		'react/require-default-props': [0],
		'react/forbid-prop-types': [0],
		'global-require': [0],
		'jsx-a11y/click-events-have-key-events': [0],
		'jsx-a11y/no-static-element-interactions': [0],
		camelcase: [0],
		'import/prefer-de a fault-export': [0],
		'no-nested-ternary': [0],
		'react/no-array-index-key': [0],
	},
};
