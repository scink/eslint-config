module.exports = {
	plugins: ['@typescript-eslint'],
	extends: ['plugin:@typescript-eslint/recommended'],
	parser: '@typescript-eslint/parser',
	rules: {
		'@typescript-eslint/no-explicit-any': 'warn',
		'@typescript-eslint/no-unused-vars': ['warn'],
		'@typescript-eslint/array-type': ['error', {default: 'generic'}],
		'@typescript-eslint/consistent-type-definitions': ['error'],
		'@typescript-eslint/no-namespace': ['off'],
		'@typescript-eslint/naming-convention': [
			'warn',
			{selector: 'interface', format: ['PascalCase']},
			{selector: 'typeAlias', format: ['PascalCase']},
		],
	},
};
