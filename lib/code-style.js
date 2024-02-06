module.exports = {
	env: {
		es2021: true,
		node: true,
	},
	plugins: ['@stylistic'],
	extends: ['eslint:recommended'],
	parserOptions: {
		ecmaVersion: 'latest',
		sourceType: 'module',
	},
	rules: {
		'linebreak-style': ['error', 'unix'],
		// overrides by ./prettier.js
		'arrow-body-style': ['off'],
		// handled by prettier
		indent: ['off'],
		quotes: ['off'],
	},
};
