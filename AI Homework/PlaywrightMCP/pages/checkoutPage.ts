import { expect, Page } from '@playwright/test';

export class CheckoutPage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async fillCheckoutData(firstName: string, lastName: string, postalCode: string) {
    await expect(this.page).toHaveURL(/.*checkout-step-one.html/);
    await this.page.locator('[data-test="firstName"]').fill(firstName);
    await this.page.locator('[data-test="lastName"]').fill(lastName);
    await this.page.locator('[data-test="postalCode"]').fill(postalCode);
    await this.page.locator('[data-test="continue"]').click();
  }

  async checkCheckoutOverview() {
    await expect(this.page).toHaveURL(/.*checkout-step-two.html/);
    await expect(this.page.locator('.summary_info')).toContainText('Payment Information:');
    await expect(this.page.locator('.summary_info')).toContainText('Shipping Information:');
    await expect(this.page.locator('.summary_info')).toContainText('Price Total');
  }

  async finishOrder() {
    await this.page.locator('[data-test="finish"]').click();
  }

  async checkOrderIsCompleted() {
    await expect(this.page).toHaveURL(/.*checkout-complete.html/);
    await expect(this.page.locator('[data-test="complete-header"]')).toHaveText('Thank you for your order!');
    await expect(this.page.locator('[data-test="complete-text"]')).toHaveText('Your order has been dispatched, and will arrive just as fast as the pony can get there!');
  }

  async backToHomePage() {
    await this.page.locator('[data-test="back-to-products"]').click();
  }
}
