module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: 'tsconfig.json', 
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint/eslint-plugin'],
  extends: [
    'plugin:@typescript-eslint/recommended',
  ],
  root: true,
  env: {
    node: true,
    jest: true,
  },
  ignorePatterns: [
    'db/migrations/**/*.js',
    '.eslintrc.js',
    'updateSkills.mjs',
    './serverless/**/*',
    'src/@generated/fabbrica/**/*',
    'e2e.setup.js',
  ],
  rules: {
    '@typescript-eslint/consistent-type-assertions': [
      'error',
      { assertionStyle: 'never' },
    ],
    'no-duplicate-imports': 'error',
    'no-return-await': 'error',
    'require-await': 'error',
    'no-param-reassign': 'error',
    'object-shorthand': 'error',
    '@typescript-eslint/interface-name-prefix': 'off',
    '@typescript-eslint/await-thenable': 'error',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'error',
    '@typescript-eslint/no-explicit-any': 'error',
    '@typescript-eslint/no-unsafe-call': 'error',
    '@typescript-eslint/no-unsafe-member-access': 'error',
    '@typescript-eslint/no-unsafe-argument': 'error',
    '@typescript-eslint/no-unsafe-assignment': 'error',
    '@typescript-eslint/no-unnecessary-condition': 'error',
    'no-console': ['warn', { allow: ['error', 'warn'] }],
    'padding-line-between-statements': [
      'warn',
      { blankLine: 'always', prev: '*', next: 'return' },
      { blankLine: 'always', prev: '*', next: 'if' },
      { blankLine: 'always', prev: '*', next: 'export' },
    ],
    '@typescript-eslint/naming-convention': [
      'error',
      {
        selector: 'function',
        format: ['PascalCase', 'camelCase'],
      },
      {
        selector: 'typeAlias',
        format: ['PascalCase'],
      },
    ],
  },
  overrides: [
    {
      files: ['src/@generated/zod/**/*'],
      rules: {
        'padding-line-between-statements': 'off',
      },
    },
    {
      files: ['src/utils/esm-modules/*.ts'],
      rules: {
        '@typescript-eslint/consistent-type-assertions': 'off',
      },
    },
    {
      files: ['**/*.ts', '**/*.tsx'],
      parserOptions: {
        project: 'tsconfig.json',
        sourceType: 'module',
      },
    },
  ],
};
