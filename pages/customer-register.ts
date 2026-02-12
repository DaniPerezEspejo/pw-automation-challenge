import { type Locator, type Page } from '@playwright/test';

export class CustomerRegister {
  private readonly page: Page;
  private readonly registerLink: Locator;
  private readonly firstNameInput: Locator;
  private readonly lastNameInput: Locator;
  private readonly addressInput: Locator;
  private readonly cityInput: Locator;
  private readonly stateInput: Locator;
  private readonly zipCodeInput: Locator;
  private readonly phoneNumberInput: Locator;
  private readonly ssnInput: Locator;
  private readonly usernameInput: Locator;
  private readonly passwordInput: Locator;
  private readonly repeatedPasswordInput: Locator;

  private readonly registerButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.registerLink =  page.getByRole('link', { name: 'Register' });

    this.firstNameInput = page.locator('input[name="customer.firstName"]');
    this.lastNameInput = page.locator('input[name="customer.lastName"]');
    this.addressInput = page.locator('input[name="customer.address.street"]');
    this.cityInput = page.locator('input[name="customer.address.city"]');
    this.stateInput = page.locator('input[name="customer.address.state"]');
    this.zipCodeInput = page.locator('input[name="customer.address.zipCode"]');
    this.phoneNumberInput = page.locator('input[name="customer.phoneNumber"]');
    this.ssnInput = page.locator('input[name="customer.ssn"]');
    this.usernameInput = page.locator('input[name="customer.username"]');
    this.passwordInput = page.locator('input[name="customer.password"]');
    this.repeatedPasswordInput = page.locator('input[name="repeatedPassword"]');

    this.registerButton = page.getByRole('button', { name: 'Register' });
  }

  async goto() {
    await this.page.goto('/');
    await this.registerLink.click();
  } 

  async register(userData:any, password: string) {
    await this.firstNameInput.fill(userData.firstName);
    await this.lastNameInput.fill(userData.lastName);
    await this.addressInput.fill(userData.address);
    await this.cityInput.fill(userData.city);
    await this.stateInput.fill(userData.state);
    await this.zipCodeInput.fill(userData.zipCode);
    await this.phoneNumberInput.fill(userData.phoneNumber);
    await this.ssnInput.fill(userData.ssn);
    await this.usernameInput.fill(userData.username);
    await this.passwordInput.fill(password);
    await this.repeatedPasswordInput.fill(password); 

    await this.registerButton.click();
  }
}