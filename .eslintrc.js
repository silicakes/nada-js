module.exports = {
	env: {
		browser: true,
		es6: true,
		node: true
	},
	extends: 'airbnb-base',
	globals: {
		Atomics: 'readonly',
		SharedArrayBuffer: 'readonly'
	},
	parserOptions: {
		ecmaVersion: 2018,
		sourceType: 'module'
	},
	rules: {},
	parser: '@typescript-eslint/parser',
	env: {
		jest: true
	},
	settings: {
		'import/resolver': {
			node: {
        "extensions": ['.ts']
      }
		}
	}
};
