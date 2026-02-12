import { defineConfig, devices } from '@playwright/test';
import baseConfig from './playwright-base.config';
import dotenv from 'dotenv';
import path from 'path';

// Load ENV variables for dev environment
dotenv.config({ path: path.resolve(import.meta.dirname, '.env.prod') });

export default defineConfig({
  ...baseConfig,
  retries: 2,
  use: {
    ...baseConfig,
    trace: 'on',
  },

  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },

    {
      name: 'firefox',
      use: { ...devices['Desktop Firefox'] },
    },

    {
      name: 'webkit',
      use: { ...devices['Desktop Safari'] },
    },
  ],
});
