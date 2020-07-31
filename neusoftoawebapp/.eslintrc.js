module.exports = {
  root: true,
  env: {
    node: true
  },
  'extends': [
    'plugin:vue/essential',
    'eslint:recommended'
  ],
  parserOptions: {
    parser: 'babel-eslint'
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-tabs': "off",
	'arrow-parens': 0,
	'generator-star-spacing': 0,
	'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,
	"no-unused-vars": [2, {
		"vars": "local",
		"args": "none"
	}],
	"semi": [0],
	"no-multiple-empty-lines": [0, {"max": 100}],
	"no-mixed-spaces-and-tabs": [0]
  }
}
