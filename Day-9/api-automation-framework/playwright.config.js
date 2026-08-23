// @ts-check

import { defineConfig } from '@playwright/test';

export default defineConfig({

  // Test files location
  testDir: './tests',

  // Run tests in parallel
  fullyParallel: true,

  // Fail the build if test.only is accidentally committed
  forbidOnly: !!process.env.CI,

  // Retry failed tests only on CI
  retries: process.env.CI ? 2 : 0,

  // Use one worker on CI
  workers: process.env.CI ? 1 : undefined,

  // Reports
  reporter: [
    ['list'],
    ['html', { open: 'never' }]
  ],

  // Global API settings
  use: {

    // Base URL for all API requests
    baseURL: 'https://restful-booker.herokuapp.com',

    // Default headers
    extraHTTPHeaders: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },

    // Capture trace when a test is retried
    trace: 'on-first-retry'
  },

  // API project
  projects: [
    {
      name: 'API Tests'
    }
  ]
});