module.exports = {
  extends: ['eslint:recommended', 'prettier'],
  parserOptions: {
    ecmaVersion: '2018',
  },
  env: {
    jest: true,
    mocha: true,
    node: true,
    es6: true,
  },
  rules: {
    'no-console': 'off',
    'no-unexpected-multiline': 'error',
    'no-var': 'error',
    'prefer-const': 'error',
    'space-before-blocks': ['error', 'always'],
    semi: ['error', 'never'],
  },
}
