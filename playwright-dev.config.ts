import { defineConfig, devices } from "@playwright/test";
import baseConfig from "./playwright-base.config";
import dotenv from "dotenv";
import path from "path";

// Load ENV variables for dev environment
dotenv.config({ path: path.resolve(import.meta.dirname, ".env.dev") });

export default defineConfig({
  ...baseConfig,
  use: {
    ...baseConfig.use,
    // Usually I would left here "on-first-retry", but for pipeline demonstration
    // I enabled the trace to see GitHub Pages in action
    trace: "on",
  },

  projects: [
    {
      name: "chromium",
      use: { ...devices["Desktop Chrome"] },
    },

    {
      name: "firefox",
      use: { ...devices["Desktop Firefox"] },
    },

    {
      name: "webkit",
      use: { ...devices["Desktop Safari"] },
    },
  ],
});
