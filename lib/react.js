module.exports = {
	extends: ['plugin:react/recommended', 'plugin:react-hooks/recommended'],
	plugins: ['react-hooks'],
	rules: {
		'react/jsx-curly-brace-presence': [1, {props: 'always'}],
		'react/react-in-jsx-scope': 0,
		'react/display-name': 0,
		'react/jsx-key': 0,
	},
	settings: {
		react: {
			version: 'detect',
		},
	},
};
