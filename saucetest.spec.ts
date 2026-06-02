import { expect, test } from "@playwright/test";
import { SauceLoginPage } from "../pages/sauceLoginPage";
import { SauceInventoryPage } from "../pages/sauceInventoryPage";

test("login and validate the first available product name", async ({ page }) => {
  const sauceLoginPage = new SauceLoginPage(page);
  const sauceInventoryPage = new SauceInventoryPage(page);

  await page.goto("https://www.saucedemo.com/");
  await page.waitForTimeout(3000);

  await sauceLoginPage.login("standard_user", "secret_sauce");
  await page.waitForTimeout(3000);

  await expect(page).toHaveURL(/inventory/);
    await page.waitForTimeout(3000);

  const firstProductName = await sauceInventoryPage.getFirstProductName();

  console.log(`First available product: ${firstProductName}`);

  expect(firstProductName).toBe("Sauce Labs Backpack");
});

test("validate product prices", async ({ page }) => {
  const sauceLoginPage = new SauceLoginPage(page);
  const sauceInventoryPage = new SauceInventoryPage(page);

  await page.goto("https://www.saucedemo.com/");
   await page.waitForTimeout(3000);

  await sauceLoginPage.login("standard_user", "secret_sauce");
   await page.waitForTimeout(3000);

  await expect(page).toHaveURL(/inventory/);
   await page.waitForTimeout(3000);

  const firstProductPrice = await sauceInventoryPage.getProductPriceByIndex(0);
  const fourthProductPrice = await sauceInventoryPage.getProductPriceByIndex(3);

  console.log(`First product price: ${firstProductPrice}`);
  console.log(`Fourth product price: ${fourthProductPrice}`);

  expect(firstProductPrice).not.toBe(fourthProductPrice);
}); 