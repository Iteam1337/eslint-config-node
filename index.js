module.exports = {
  extends: ['eslint:recommended'],
  parserOptions: {
    ecmaVersion: '2018',
  },
  env: {
    jest: true,
    mocha: true,
    node: true,
  },
  rules: {
    'no-console': 'off',
    'no-var': 'error',
    'no-unexpected-multiline': 'error',
    'prefer-const': 'error',
    semi: ['error', 'never'],
    'space-before-blocks': ['error', 'always'],
    'space-before-function-paren': ['error', 'always'],
  },
}
