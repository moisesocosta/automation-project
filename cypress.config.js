const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: '1gntm5',
  viewportWidth: 1920,
  viewportHeight: 1080,
  chromeWebSecurity: false,

  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    
    baseUrl: 'https://ferreiracosta.com/',
  },
});
