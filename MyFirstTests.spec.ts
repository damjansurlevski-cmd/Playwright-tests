import { test } from "playwright/test";
import { setTimeout } from "timers/promises";

test("My First Test", async ({ page }) => {
    await page.goto("https://www.google.com");
    await page.waitForTimeout(5000);
});

test("My Second Test", async ({ page }) => {
    await page.goto("https://www.anhoch.com");
    await page.waitForTimeout(5000);
});