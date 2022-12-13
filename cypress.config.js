const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },

    baseUrl: "https://ui-automation-camp.vercel.app",
    specPattern: 'cypress/e2e/test/**/*.cy.{js,jsxx,ts,tsx}',
    //viewportHeight: 960,
    //viewportWidth: 1536,
    reporter: 'mochawesome',
    reporterOptions: {
      reportDir: 'cypress/reports',
      overwrite: false,
      html: false,
      json: true
    },
    chromeWebSecurity: false
    }
});
