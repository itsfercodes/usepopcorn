module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true
  },
  extends: ['eslint:recommended', 'plugin:react/recommended', 'plugin:react/jsx-runtime', 'plugin:react-hooks/recommended', 'airbnb', 'prettier'],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  settings: { react: { version: '18.2' } },
  overrides: [
    {
      env: {
        node: true
      },
      files: ['.eslintrc.{js,cjs}'],
      parserOptions: {
        sourceType: 'script'
      }
    }
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  rules: {
    'react/react-in-jsx-scope': 0,
    'quotes': ['error', 'single', { 'allowTemplateLiterals': true }],
    'comma-dangle': [
      'error',
      {
        imports: 'never',
        arrays: 'never',
        objects: 'never',
        exports: 'never',
        functions: 'never'
      }
    ],
    'react/function-component-definition': [2, { "namedComponents": "function-declaration" }],
    'react/jsx-one-expression-per-line': [
      0,
      {
        allow: 'single-child'
      }
    ],
  }
};

