import { test as base } from "@playwright/test";
import { CustomerRegister } from "../pages/customer-register";
import { CustomerLogin } from "../pages/customer-login";
import { LeftMenu } from "../pages/left-menu";
import { AccountsOverview } from "../pages/accounts-overview";
import { TransferFunds } from "../pages/transfer-funds";
import { AccountDetails } from "../pages/account-details";
import { generateUserData, getPassword } from "../utils/dataGenerator";

type MyFixtures = {
  customerRegister: CustomerRegister;
  customerLogin: CustomerLogin;
  accountsOverview: AccountsOverview;
  leftMenu: LeftMenu;
  transferFunds: TransferFunds;
  accountDetails: AccountDetails;
  registeredUser: { username: string; password: string };
};

export const test = base.extend<MyFixtures>({
  customerLogin: async ({ page }, use) => {
    const customerLogin = new CustomerLogin(page);
    await use(customerLogin);
  },
  accountsOverview: async ({ page }, use) => {
    const accountsOverview = new AccountsOverview(page);
    await use(accountsOverview);
  },
  customerRegister: async ({ page }, use) => {
    const customerRegister = new CustomerRegister(page);
    await use(customerRegister);
  },
  leftMenu: async ({ page }, use) => {
    const leftMenu = new LeftMenu(page);
    await use(leftMenu);
  },
  transferFunds: async ({ page }, use) => {
    const transferFunds = new TransferFunds(page);
    await use(transferFunds);
  },
  accountDetails: async ({ page }, use) => {
    const accountDetails = new AccountDetails(page);
    await use(accountDetails);
  },

  registeredUser: async ({ leftMenu, customerRegister }, use) => {
    const randomUser = generateUserData();
    const effectivePassword = getPassword("PARABANK_PASSWORD");

    await customerRegister.goto();
    await customerRegister.register(randomUser, effectivePassword);
    await leftMenu.logout();

    await use({
      username: randomUser.username,
      password: effectivePassword,
    });
  },
});

export { expect } from "@playwright/test";
