import { Page } from "@playwright/test";

export class TextBoxPage {
    readonly page: Page;
    readonly fullNameLabelLocator: string = "#userName-label";
    readonly emailLabelLocator: string = "#userEmail-label";
    readonly currentAddressLabelLocator: string = "#currentAddress-label";
    readonly permanentAddressLabelLocator: string = "#permanentAddress-label";

    constructor(page: Page) {
        this.page = page;
    }
}
