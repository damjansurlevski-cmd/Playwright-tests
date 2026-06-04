import { Page } from "@playwright/test";

export class DemoqaHomePage {
    readonly page: Page;
    readonly elementsLocator: string = "//h5[text()='Elements']";
    readonly formsLocator: string = "//h5[text()='Forms']";
    readonly bookStoreApplicationLocator: string = "//h5[text()='Book Store Application']";

    constructor(page: Page) {
        this.page = page;
    }

    async clickElementsButton() {
        await this.page.locator(this.elementsLocator).click();
    }

    async clickFormsButton() {
        await this.page.locator(this.formsLocator).click();
    }

    async clickBookStoreApplicationButton() {
        await this.page.locator(this.bookStoreApplicationLocator).scrollIntoViewIfNeeded();
        await this.page.locator(this.bookStoreApplicationLocator).click();
    }

    async openNextPage(locator: string) {
        await this.page.locator(locator).click();
    }
}
