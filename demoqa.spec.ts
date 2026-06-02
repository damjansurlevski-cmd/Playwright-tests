import { test, expect } from "@playwright/test";
import { setTimeout } from "timers/promises";

test.beforeEach(async ({ page }) => {
  await setTimeout(5000);
  await page.goto("https://demoqa.com/");
});

test("Test 1", async ({ page }) => {
  await page.locator("xpath=//*[text()='Elements']").click();
  await expect(page).toHaveTitle("demosite");
});

test("Test 2", async ({ page }) => {
  await page.locator("xpath=//*[text()='Forms']").click();
  await page.locator("xpath=//*[text()='Practice Form']").click();
  await expect(page.locator("//h1")).toHaveText("Practice Form");
});

test.afterEach(async ({ page }) => {
  await setTimeout(5000);
});