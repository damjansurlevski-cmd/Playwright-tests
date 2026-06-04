import { test } from '@playwright/test';
import { LoginPage } from '../pages/loginPage';
import { InventoryPage } from '../pages/inventoryPage';
import { CartPage } from '../pages/cartPage';
import { CheckoutPage } from '../pages/checkoutPage';
import { loginUsers } from '../data/users';

test.describe('SauceDemo AI homework', () => {
  test('login with all available users', async ({ page }) => {
    const loginPage = new LoginPage(page);
    const inventoryPage = new InventoryPage(page);

    for (const user of loginUsers) {
      await loginPage.open();
      await loginPage.login(user.username, user.password);

      if (user.shouldLogin) {
        await loginPage.checkSuccessfulLogin();
        await inventoryPage.logout();
        await loginPage.checkLoginPage();
      } else {
        await loginPage.checkUnsuccessfulLogin(user.errorMessage);
      }
    }
  });

  test('complete order with standard user', async ({ page }) => {
    const loginPage = new LoginPage(page);
    const inventoryPage = new InventoryPage(page);
    const cartPage = new CartPage(page);
    const checkoutPage = new CheckoutPage(page);

    await loginPage.open();
    await loginPage.login('standard_user', 'secret_sauce');
    await loginPage.checkSuccessfulLogin();

    await inventoryPage.addBackpackToCart();
    await inventoryPage.checkBackpackIsAdded();
    await inventoryPage.openCart();

    await cartPage.checkBackpackInCart();
    await cartPage.goToCheckout();

    await checkoutPage.fillCheckoutData('Damjan', 'Test', '1000');
    await checkoutPage.checkCheckoutOverview();
    await checkoutPage.finishOrder();
    await checkoutPage.checkOrderIsCompleted();
    await checkoutPage.backToHomePage();

    await inventoryPage.checkHomePage();
    await inventoryPage.logout();
    await loginPage.checkLoginPage();
  });
});
