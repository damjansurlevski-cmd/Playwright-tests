import { expect, Page } from '@playwright/test';

export class CartPage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async checkBackpackInCart() {
    await expect(this.page).toHaveURL(/.*cart.html/);
    await expect(this.page.locator('[data-test="inventory-item-name"]')).toHaveText('Sauce Labs Backpack');
  }

  async goToCheckout() {
    await this.page.locator('[data-test="checkout"]').click();
  }
}
