module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
  ],
  overrides: [],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['react', '@typescript-eslint'],
  rules: {
    'react/jsx-curly-brace-presence': 2,
    'react/react-in-jsx-scope': 0,
    '@typescript-eslint/no-empty-interface': 0,
  },
  ignorePatterns: [
    '/**/dist',
    '/**/build',
    '/**/*.config.js',
    '/**/.eslintrc.js',
  ],
}
