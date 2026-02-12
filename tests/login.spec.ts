import { test, expect } from '../fixtures/parabank-base';
import loginData from '../data/login.json' with { type: 'json' };
import errorMessages from '../data/error-messages.json' with { type: 'json' };

test.describe('Parabank challenge - Login flow', () => {  

  test('Login - Invalid user', async ({ customerLogin }) => {
    await customerLogin.goto();
    await customerLogin.login(
      loginData.invalidUser.username,
      loginData.invalidUser.password
    );
    
    await expect(customerLogin.errorMessageTitle).toHaveText(errorMessages.invalidLogin.title);
    await expect(customerLogin.errorMessageBody).toHaveText(errorMessages.invalidLogin.body);
    await expect(customerLogin.errorMessageBody).toHaveCSS('color', 'rgb(255, 0, 0)');
  });

  test('Login - Valid user', async ({ customerLogin, accountsOverview, registeredUser, leftMenu, transferFunds, accountDetails }) => {
    await customerLogin.goto();

    await customerLogin.login(
      registeredUser.username,
      registeredUser.password
    );

    await accountsOverview.verifyAccountsOverviewIsDisplayed();

    await leftMenu.gotoTransferFunds();
    await transferFunds.transfer("100");
    await transferFunds.verifyTransferComplete();

    await leftMenu.gotoAccountsOverview();
    await accountsOverview.gotoAccountDetails();
    await accountDetails.captureAccountState(registeredUser.username);
  });
});