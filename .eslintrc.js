/** @format */

module.exports = {
  root: true,
  plugins: ['@typescript-eslint', 'import', 'prettier', 'react', 'react-hooks', 'react-native'],
  parser: '@typescript-eslint/parser',
  rules: {
    'no-restricted-imports': 'off',
    '@typescript-eslint/no-restricted-imports': [
      'warn',
      {
        name: 'react-redux',
        importNames: ['useSelector', 'useDispatch'],
        message: 'Use typed hooks `useAppDispatch` and `useAppSelector` instead.',
      },
    ],
    // this is for sorting WITHIN an import
    'sort-imports': ['error', { ignoreCase: true, ignoreDeclarationSort: true }],
    // this is for sorting imports
    'import/order': [
      'error',
      {
        'groups': [['external', 'builtin'], 'internal', ['sibling', 'parent'], 'index'],
        'pathGroups': [
          {
            pattern: 'react+(|-native)',
            group: 'external',
            position: 'before',
          },
          {
            pattern: '~/**',
            group: 'internal',
          },
          {
            pattern: './styles',
            group: 'index',
            position: 'after',
          },
        ],
        'pathGroupsExcludedImportTypes': ['internal', 'react'],
        'newlines-between': 'always',
        'alphabetize': {
          order: 'asc',
          caseInsensitive: true,
        },
      },
    ],
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "warn"
  },
};
