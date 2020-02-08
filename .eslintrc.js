module.exports = {
    extends: [
      'airbnb',
      'prettier',
      'prettier/react',
    ],
    plugins: [
      'prettier',
      'react-hooks',
    ],
    env: {
      browser: true,
      jest: true,
    },
    rules: {
      'react/jsx-filename-extension': 'off',
      'prettier/prettier': ['error'],

      // The below is the full config of extraneous dependencies from airbnb,
      // with overrides to ignore storybook files as well
      'import/no-extraneous-dependencies': [
        'error',
        {
          'devDependencies': [
            'test/**',
            'tests/**',
            'spec/**',
            '**/__tests__/**',
            '**/__mocks__/**',
            'test.{js,jsx}',
            'test-*.{js,jsx}',
            '**/*{.,_}{test,spec,story,stories}.{js,jsx}', // Changed from original
            '**/jest.config.js',
            '**/vue.config.js',
            '**/webpack.config.js',
            '**/webpack.config.*.js',
            '**/rollup.config.js',
            '**/rollup.config.*.js',
            '**/gulpfile.js',
            '**/gulpfile.*.js',
            '**/Gruntfile{,.js}',
            '**/protractor.conf.js',
            '**/protractor.conf.*.js',
            '.storybook/**', // Changed from original
          ],
          'optionalDependencies': false
        }
      ],
    },
  };
