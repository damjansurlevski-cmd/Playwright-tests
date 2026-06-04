import { expect, test } from "@playwright/test";
import { BaseHooks } from "../utils/BaseHooks";
import { DemoqaHomePage } from "../pages/demoqaHomePage";
import { BookStorePage } from "../pages/bookStorePage";


test.describe("Book Store Application POM tests", () => {
    BaseHooks.registerHooks(test);

    test("Validate book store data", async ({ page }) => {
        const demoqaHomePage = new DemoqaHomePage(page);
        const bookStorePage = new BookStorePage(page);

        await demoqaHomePage.clickBookStoreApplicationButton();
        await expect(page.locator(bookStorePage.pageTitleLocator)).toHaveText("Book Store");
        await expect(page.locator(bookStorePage.bookTitleByAuthorLocator("Richard E. Silverman"))).toHaveText("Git Pocket Guide");
        await expect(page.locator(bookStorePage.authorByBookTitleLocator("You Don't Know JS", "Kyle Simpson"))).toHaveText("Kyle Simpson");
        await expect(page.locator(bookStorePage.publisherLocator("O'Reilly Media")).first()).toHaveText("O'Reilly Media");
        await expect(page.locator(bookStorePage.publisherLocator("No Starch Press")).first()).toHaveText("No Starch Press");
    });
});
