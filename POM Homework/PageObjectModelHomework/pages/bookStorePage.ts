import { Page } from "@playwright/test";

export class BookStorePage {
    readonly page: Page;
    readonly pageTitleLocator: string = "//div[@class='main-header']";

    constructor(page: Page) {
        this.page = page;
    }

    bookTitleByAuthorLocator(author: string): string {
        return `//div[contains(@class,'rt-tr-group')][.//div[text()="${author}"]]//a`;
    }

    authorByBookTitleLocator(bookTitle: string, author: string): string {
        return `//div[contains(@class,'rt-tr-group')][.//a[text()="${bookTitle}"]]//div[text()="${author}"]`;
    }

    publisherLocator(publisher: string): string {
        return `//div[contains(@class,'rt-tr-group')]//div[text()="${publisher}"]`;
    }
}
