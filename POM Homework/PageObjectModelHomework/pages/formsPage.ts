import { Page } from "@playwright/test";

export class FormsPage {
    readonly page: Page;
    readonly practiceFormLocator: string = "//span[text()='Practice Form']";

    constructor(page: Page) {
        this.page = page;
    }

    async clickPracticeFormButton() {
        await this.page.locator(this.practiceFormLocator).click();
    }
}
