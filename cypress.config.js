const { defineConfig } = require('cypress');

module.exports = defineConfig({
  component: {
    devServer: {
      framework: 'vue',
      bundler: 'vite',
      port: 1234,
    },
  },
  // setupNodeEvents can be defined in either
  // the e2e or component configuration
  env: {
    codeCoverage: {
      url: 'http://localhost:3000/__coverage__',
    },
  },
  e2e: {
    baseUrl: 'http://localhost:3000',
    component: {
      componentFolder: 'src',
      specPattern: '**/__tests__/*.spec.{js,ts,jsx,tsx}',
    },
    setupNodeEvents(on, config) {
      require('@cypress/code-coverage/task')(on, config);
      // include any other plugin code...

      // It's IMPORTANT to return the config object
      // with any changed environment variables
      return config;
    },
  },
});
