require('ignore-styles');

require('@babel/register')({
	ignore: [/(node_modules)/],
	presets: ['@babel/preset-env', '@babel/preset-react'],
	plugins: ['@babel/plugin-proposal-class-properties'],
	// extensions: ['.js', '.jsx'],
	only: ['/src'],
	// babelrc: true,
	cache: false,
	babelrcRoots: ['.', './src'],
});

require('./server');
