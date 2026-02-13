import { type Locator, type Page, expect } from "@playwright/test";
import { getTodayDateFormatted } from "../utils/parabank-helpers";

export class AccountDetails {
  private readonly page: Page;
  readonly accountDetailsTable: Locator;

  constructor(page: Page) {
    this.page = page;
    this.accountDetailsTable = page
      .getByRole("table")
      .and(page.locator("#transactionTable"));
  }

  /**
   * Verify Account Details table data for a specific row
   * @param row Row we want to verify
   * @param type Transaction type: Debit or Credit
   * @param amount Formatted amount, starting with currency and amount with two decimals
   */
  async verifyTransaction(row: number, type: string, amount: string) {
    const targetRow = this.accountDetailsTable.locator("tbody tr").nth(row);
    const todayDate = getTodayDateFormatted();
    const expectedMessage =
      type === "Debit" ? "Funds Transfer Sent" : "Funds Transfer Received";

    await expect(targetRow.locator("td").nth(0)).toContainText(todayDate);
    await expect(targetRow.locator("td").nth(1)).toContainText(expectedMessage);

    if (type === "Debit") {
      await expect(targetRow.locator("td").nth(2)).toContainText(amount);
      await expect(targetRow.locator("td").nth(3)).toBeEmpty();
    } else {
      await expect(targetRow.locator("td").nth(2)).toBeEmpty();
      await expect(targetRow.locator("td").nth(3)).toContainText(amount);
    }
  }

  /**
   * Takes a screenshot of Account Details page to show on report
   * @param name Name of the screenshot saved
   */
  async captureAccountState(name: string) {
    await this.page.screenshot({
      path: `test-results/screenshots/${name}.png`,
      fullPage: true,
    });
  }
}
