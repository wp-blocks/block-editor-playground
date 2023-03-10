module.exports = {
	root: true,
	parser: '@typescript-eslint/parser',
	parserOptions: {
		sourceType: 'module',
		project: [ './src/tsconfig.json', './tsconfig.eslint.json' ],
	},
	extends: [
		'plugin:@wordpress/eslint-plugin/recommended',
		'plugin:@typescript-eslint/recommended',
		'plugin:@typescript-eslint/recommended-requiring-type-checking',
		'plugin:@typescript-eslint/strict',
		'plugin:import/recommended',
		'plugin:import/typescript',
	],
	plugins: [ '@typescript-eslint' ],
	rules: {
		'import/order': [
			'error',
			{
				alphabetize: {
					order: 'asc',
					caseInsensitive: true,
				},
				'newlines-between': 'always',
				groups: [ 'builtin', 'external', 'parent', 'sibling', 'index' ],
				pathGroups: [
					{
						pattern: '@wordpress/**',
						group: 'external',
					},
				],
				pathGroupsExcludedImportTypes: [ 'builtin' ],
			},
		],
		'no-console': 'off',
		'react/jsx-uses-react': 'off',
		'react/react-in-jsx-scope': 'off',
	},
	overrides: [
		{
			files: 'tests/**/*',
			rules: {
				'@typescript-eslint/no-unsafe-call': 'off',
			},
		},
		{
			files: [ '*.js', '*.cjs' ],
			rules: {
				'@typescript-eslint/no-var-requires': 'off',
				'@typescript-eslint/no-unsafe-call': 'off',
				'@typescript-eslint/no-unsafe-assignment': 'off',
				'@typescript-eslint/no-unsafe-member-access': 'off',
				'@typescript-eslint/restrict-template-expressions': 'off',
			},
		},
		{
			files: [ 'scripts/**/*' ],
			rules: {
				'no-console': 'off',
				'jsdoc/no-undefined-types': 'off',
				'@typescript-eslint/no-unsafe-argument': 'off',
			},
		},
	],
	settings: {
		'import/parsers': {
			'@typescript-eslint/parser': [ '.ts', '.tsx' ],
		},
		'import/resolver': {
			typescript: {
				alwaysTryTypes: true,
				project: [ './src/tsconfig.json', './tsconfig.eslint.json' ],
			},
		},
	},
	env: {
		browser: true,
		es2017: true,
		node: true,
	},
};
