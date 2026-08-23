import { defineConfig } from '@playwright/test';

export default defineConfig({
  projects: [
    {
      name: 'setup',
      testMatch: /.*\.setup\.js/,
    },

    {
      name: 'chromium',
      use: {
        browserName: 'chromium',
        // storageState: 'auth/user.json',
      },
      dependencies: ['setup'],
    },
  ],
});
