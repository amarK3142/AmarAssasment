module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: 'airbnb-base',
  overrides: [
  ],
  "parser": "babel-eslint",
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },

    plugins: ["jest"]
  
  , rules: {
    'linebreak-style': ['error', 'windows'],
  },
};
