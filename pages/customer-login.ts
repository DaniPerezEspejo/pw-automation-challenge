import { type Locator, type Page } from "@playwright/test";

export class CustomerLogin {
  private readonly page: Page;
  private readonly usernameInput: Locator;
  private readonly passwordInput: Locator;
  private readonly loginButton: Locator;

  readonly errorMessageTitle: Locator;
  readonly errorMessageBody: Locator;

  constructor(page: Page) {
    this.page = page;
    this.usernameInput = page.locator('input[name="username"]');
    this.passwordInput = page.locator('input[name="password"]');
    this.loginButton = page.getByRole("button", { name: "Log In" });
    this.errorMessageTitle = page.getByRole("heading", { level: 1 });
    this.errorMessageBody = page.locator("#rightPanel p");
  }

  async goto() {
    await this.page.goto("/");
  }

  async login(user: string, password: string) {
    await this.usernameInput.fill(user);
    await this.passwordInput.fill(password);
    await this.loginButton.click();
  }
}
