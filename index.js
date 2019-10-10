module.exports = {
  extends: ['eslint:recommended', 'prettier'],
  parserOptions: {
    ecmaVersion: '2018',
  },
  env: {
    es6: true,
    jest: true,
    mocha: true,
    node: true,
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
