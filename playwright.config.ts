import { testPlanFilter } from "allure-playwright/dist/testplan";

const config: defineConfig = {
  testDir: './tests',
  timeout: 30 * 1000,
  expect: {
    timeout: 5000
  },

   grep: testPlanFilter(),
   reporter: [["line"], ["allure-playwright"]],

  use: {
    actionTimeout: 0,
    trace: 'on-first-retry',
  },
};

export default config;