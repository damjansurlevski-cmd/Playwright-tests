import { expect, Page } from '@playwright/test';

export class LoginPage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async open() {
    await this.page.goto('/');
  }

  async login(username: string, password: string) {
    await this.page.locator('#user-name').fill(username);
    await this.page.locator('#password').fill(password);
    await this.page.locator('#login-button').click();
  }

  async checkSuccessfulLogin() {
    await expect(this.page).toHaveURL(/.*inventory.html/);
    await expect(this.page.locator('.app_logo')).toHaveText('Swag Labs');
    await expect(this.page.locator('[data-test="inventory-list"]')).toBeVisible();
  }

  async checkUnsuccessfulLogin(errorMessage: string) {
    await expect(this.page).toHaveURL(/.*saucedemo.com\//);
    await expect(this.page.locator('[data-test="error"]')).toContainText(errorMessage);
  }

  async checkLoginPage() {
    await expect(this.page.locator('#user-name')).toBeVisible();
    await expect(this.page.locator('#password')).toBeVisible();
    await expect(this.page.locator('#login-button')).toBeVisible();
  }
}
