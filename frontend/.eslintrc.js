module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    'plugin:vue/vue3-recommended',
    '@vue/airbnb',
  ],
  parserOptions: {
    requireConfigFile: false,
    parser: '@babel/eslint-parser',
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'max-len': 'off',
    'vue/html-indent': ['error', 2, {
      attribute: 1,
      baseIndent: 0,
      closeBracket: 0,
      alignAttributesVertically: true,
      ignores: [],
    }],
  },
};
