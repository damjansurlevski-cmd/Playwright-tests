import { Page } from "@playwright/test";

export class ElementsPage {
    readonly page: Page;
    readonly pageTitleLocator: string = "//div[@class='main-header']";
    readonly textBoxLocator: string = "//span[text()='Text Box']";

    constructor(page: Page) {
        this.page = page;
    }

    async clickTextBoxButton() {
        await this.page.locator(this.textBoxLocator).click();
    }
}
