const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    defaultCommandTimeout: 100000, // aumenta de 30s para 100s
    pageLoadTimeout: 100000,       // idem para carregamento de páginas

    setupNodeEvents(on, config) {
      // aqui você adiciona event listeners se precisar
    },
  },
});
