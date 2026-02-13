import { type Locator, type Page, expect } from "@playwright/test";

export class TransferFunds {
  private readonly page: Page;
  private readonly amountInput: Locator;
  private readonly fromSelect: Locator;
  private readonly toSelect: Locator;
  private readonly transferButton: Locator;
  private readonly messageTitle: Locator;

  constructor(page: Page) {
    this.page = page;
    this.amountInput = page.locator('input[name="input"]');

    // Using ID locator because both inputs have the same name
    this.fromSelect = page.locator("#fromAccountId");
    this.toSelect = page.locator("#toAccountId");

    this.transferButton = page.getByRole("button", { name: "Transfer" });
    this.messageTitle = page.getByRole("heading", { level: 1 });
  }

  /**
   * Performs a transfer with a given amount
   * Desired from and to account left as default for simplicity
   * @param amount Amount to transfer
   */
  async transfer(amount: string) {
    await this.amountInput.fill(amount);

    // Adding this condition to ensure account data is loaded on select components
    await expect(this.fromSelect).not.toBeEmpty();
    await expect(this.toSelect).not.toBeEmpty();

    await this.transferButton.click();
  }

  async verifyTransferComplete() {
    await expect(this.messageTitle).toBeVisible();
    await expect(this.messageTitle).toHaveText("Transfer Complete!");
  }
}
