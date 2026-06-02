import { test, expect } from '@playwright/test';

test('login and validate Sauce Labs Backpack', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');
  await page.locator('[data-test="username"]').fill('standard_user');
  await page.locator('[data-test="password"]').fill('secret_sauce');
  await page.locator('[data-test="login-button"]').click();
  await expect(page.locator('.inventory_item_name').filter({ hasText: 'Sauce Labs Backpack' })).toBeVisible();
  await expect(page.locator('.inventory_item_price').filter({ hasText: '$29.99' })).toBeVisible();
});