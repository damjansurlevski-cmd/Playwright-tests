import { test } from "playwright/test";
import { setTimeout } from "timers/promises";

test("My Third Test", async ({ page }) => {
    await page.goto("https://www.google.com");
    await page.waitForTimeout(5000);
});

test("My Fourth Test", async ({ page }) => {
    await page.goto("http://www.setec.com");
    await page.waitForTimeout(5000);
});