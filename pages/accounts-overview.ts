import { type Locator, type Page, expect } from '@playwright/test';

export class AccountsOverview {
  private readonly page: Page;

  readonly accountsOverviewTitle: Locator;
  readonly accountsOverviewTable: Locator;
  readonly accountsOverviewHeader: Locator;
  readonly accountDetailsLink: Locator;

  constructor(page: Page) {
    this.page = page;
    this.accountsOverviewTitle = page.getByRole('heading', { level: 1 });
    this.accountsOverviewTable = page.getByRole('table');
    this.accountsOverviewHeader = this.accountsOverviewTable.locator('th');
    this.accountDetailsLink = this.accountsOverviewTable.locator('a');
  }

  async verifyAccountsOverviewIsDisplayed() {
    await expect(this.accountsOverviewTitle).toBeVisible();
    await expect(this.accountsOverviewTitle).toHaveText('Accounts Overview');
    await expect(this.accountsOverviewHeader).toContainText(['Account', 'Balance*', 'Available Amount']);
  }

  async gotoAccountDetails(){
    await this.accountDetailsLink.click();
  }
}