import { type Locator, type Page, expect } from '@playwright/test';

export class AccountDetails {
  private readonly page: Page;
  readonly accountDetailsTable: Locator;

  constructor(page: Page) {
    this.page = page;
    this.accountDetailsTable = page.getByRole('table');
  }

  async captureAccountState(name: string) {
    // Adding this condition to ensure table is loaded
    const firstDataCell = this.accountDetailsTable.locator('tbody tr td').first();
    await expect(firstDataCell).not.toBeEmpty({ timeout: 10000 });

    // Parabank sometimes injects in the table placeholder cells and rows, making it really hard to know when the table is fully loaded
    // Adding a hard wait for this screenshot
    await this.page.waitForTimeout(500);

    await this.page.screenshot({ 
        path: `test-results/screenshots/${name}.png`,
        fullPage: true         
    });
  };
}