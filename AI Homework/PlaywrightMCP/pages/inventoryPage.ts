import { expect, Page } from '@playwright/test';

export class InventoryPage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async checkHomePage() {
    await expect(this.page).toHaveURL(/.*inventory.html/);
    await expect(this.page.locator('.app_logo')).toHaveText('Swag Labs');
    await expect(this.page.locator('[data-test="title"]')).toHaveText('Products');
  }

  async addBackpackToCart() {
    await this.page.locator('[data-test="add-to-cart-sauce-labs-backpack"]').click();
  }

  async checkBackpackIsAdded() {
    await expect(this.page.locator('[data-test="shopping-cart-badge"]')).toHaveText('1');
    await expect(this.page.locator('[data-test="remove-sauce-labs-backpack"]')).toBeVisible();
  }

  async openCart() {
    await this.page.locator('[data-test="shopping-cart-link"]').click();
  }

  async logout() {
    await this.page.locator('#react-burger-menu-btn').click();
    await this.page.locator('#logout_sidebar_link').click();
  }
}
