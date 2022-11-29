import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    baseUrl: 'https://example.cypress.io',
    viewportHeight: 720,
    viewportWidth: 1280,
    retries: {
        "runMode": 2,
        "openMode": 0
    },
    setupNodeEvents(on, config) {
    },
  },
});
