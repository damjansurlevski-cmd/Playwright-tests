import { test as base } from "@playwright/test";

export class BaseHooks {
    static registerHooks(test: typeof base): void {
        test.beforeAll("Before All", async () => {
            console.log("I am executed before ALL tests");
        });

        test.beforeEach("Before Each", async ({ page }) => {
            console.log("I am executed before each test");
            await page.goto("https://demoqa.com/");
        });

        test.afterEach("After Each", async ({ page }) => {
            console.log("I am executed after each test");
            await page.close();
        });

        test.afterAll("After All", async () => {
            console.log("I am executed after ALL tests");
        });
    }
}
