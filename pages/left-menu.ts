import { type Locator, type Page } from "@playwright/test";

export class LeftMenu {
  private readonly page: Page;

  private readonly logOutLink: Locator;
  private readonly transferFundsLink: Locator;
  private readonly accountsOverviewLink: Locator;

  constructor(page: Page) {
    this.page = page;
    this.logOutLink = page.getByRole("link", { name: "Log Out" });
    this.transferFundsLink = page.getByRole("link", { name: "Transfer Funds" });
    this.accountsOverviewLink = page.getByRole("link", {
      name: "Accounts Overview",
    });
  }

  async logout() {
    await this.logOutLink.click();
  }

  async gotoTransferFunds() {
    await this.transferFundsLink.click();
  }

  async gotoAccountsOverview() {
    await this.accountsOverviewLink.click();
  }
}
